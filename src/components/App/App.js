import Cloud from '../Cloud/Cloud';
import Links from '../Links/Links';
import { useDispatch, useSelector } from 'react-redux'
import { initUserAC } from '../../utils/redux/actions';
import { useNavigate } from 'react-router-dom'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(state => state.userReducer.user)
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [disabledForm, setDisabledForm] = useState(false)
  const [disabledLinks, setDisabledLinks] = useState(true)

  const userSaved = localStorage.getItem('user')

  useEffect(() => {
    if(userSaved){
      fetch(`http://localhost:3001/user/${userSaved}`)
      .then((res) => res.json())
      .then((result) => {
        dispatch(initUserAC(result))
      })
    } else {
    fetch(`http://localhost:3001/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(initUserAC(result))
        localStorage.setItem('user', result.id)
      })}
  },[dispatch, userSaved])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/user`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        id: user.id,
        email: e.target.email.value,
      }),

    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(initUserAC(result))
      })
    setDisabledBtn(true)
  }

  useEffect(() => {
    user?.email ? setDisabledForm(true) : setDisabledForm(false)
    user?.shared ? setDisabledLinks(false) : setDisabledLinks(true)
    if(user?.email && user?.shared){
      navigate('/finish');
    }
  },[user, navigate])

  const handleInputChange = (e) => {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegEx.test(e.target.value)){
      setDisabledBtn(false)
    } else {
      setDisabledBtn(true)
    }
  }


  return (
    <div className="App">
      <p className="App-header">
        Чтобы выиграть путешествие
      </p>
      <div className={`App-sector ${disabledLinks ? '' : 'opacity'}`}>
        <h1>
          1.
        </h1>
        <div className="container">
          <p>
            Поделитесь с друзьями:
          </p>
          <Links />
        </div>
      </div>
      <div className={`App-sector ${!disabledForm ? '' : 'opacity'}`}>
        <h1>
          2.
        </h1>
        <div className="container">
          <p>
            Оставьте почту:
          </p>
          <form onSubmit={handleSubmit}>
            <input  disabled={disabledForm} required type="email" name="email" className="email" onChange={handleInputChange} />
            <button disabled={disabledBtn} className={`form-button ${disabledBtn ? '' : 'disabled-btn'}`}>Отправить</button>
          </form>
        </div>
      </div>
      <Cloud />
    </div>
  );
}

export default App;
