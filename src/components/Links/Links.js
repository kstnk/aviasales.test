import React from 'react';
import './Links.css';
import { useDispatch, useSelector } from 'react-redux'
import { initUserAC } from '../../utils/redux/actions';

function Links(props) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

    const handleShareFb = () => {
        window.open(
            "https://www.facebook.com/login.php?skip_api_login=1&api_key=219887715052731&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Ffeed%3Fapp_id%3D219887715052731%26display%3Dpopup%26caption%3D%25D0%25A3%25D0%25B7%25D0%25BD%25D0%25B0%25D0%25B9%252C%2B%25D0%25BA%25D1%2582%25D0%25BE%2B%25D1%2582%25D0%25B2%25D0%25BE%25D0%25B9%2B%25D0%25BA%25D0%25B0%25D0%25BD%25D0%25B4%25D0%25B8%25D0%25B4%25D0%25B0%25D1%2582%2B%25D0%25B2%2B%25D0%25BF%25D1%2583%25D1%2582%25D0%25B5%25D1%2588%25D0%25B5%25D1%2581%25D1%2582%25D0%25B2%25D0%25B8%25D0%25B5-2018%26link%3Dhttps%253A%252F%252Fi.avs.io%252F6m4qvx%252Ffb&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=ru_RU",
            "facebook",
            "left=500,top=200,width=500,height=500"
        );
        fetch(`http://localhost:3001/userShared`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user.id,
                shared: 1,
            }),

        })
            .then((res) => res.json())
            .then((result) => dispatch(initUserAC(result)))
    }
    const handleShareVK = () => {
        window.open(
            "https://vk.com/share.php?url=https%3A%2F%2Fi.avs.io%2F6m4qvx%2Fvk&image=https://assets.hotellook.com/kandidat/upload/2919723o.png&title=%D0%92%D1%8B%D0%B8%D0%B3%D1%80%D0%B0%D0%B9%20%D0%BE%D0%B4%D0%B8%D0%BD%20%D0%B8%D0%B7%20%D0%BF%D1%8F%D1%82%D0%B8%20%D0%B0%D0%B2%D0%B8%D0%B0%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%BE%D0%B2%20%D0%BE%D1%82%20Aviasales&no_vk_links=1",
            "VK",
            "left=500,top=200,width=500,height=500"
        );
        fetch(`http://localhost:3001/userShared`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user.id,
                shared: 1,
            }),

        })
            .then((res) => res.json())
            .then((result) => dispatch(initUserAC(result)))
    }

    const handleShareTW = () => {
        window.open(
            "https://twitter.com/intent/tweet?text=%D0%A3%D0%B7%D0%BD%D0%B0%D0%B9%2C%20%D0%BA%D1%82%D0%BE%20%D1%82%D0%B2%D0%BE%D0%B9%20%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%B4%D0%B0%D1%82%20%D0%B2%20%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5-2018%20https%3A%2F%2Fi.avs.io%2F6m4qvx%2Ftw",
            "twitter",
            "left=500,top=200,width=500,height=500"
        );
        fetch(`http://localhost:3001/userShared`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user.id,
                shared: 1,
            }),

        })
            .then((res) => res.json())
            .then((result) => dispatch(initUserAC(result)))
    }

    const handleShareOk = (e) => {
        window.open(
            "https://connect.ok.ru/dk?st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fcmd%253DWidgetSharePreview%2526amp%253Bst.cmd%253DWidgetSharePreview%2526amp%253Bst.shareUrl%253Dhttps%25253A%25252F%25252Fi.avs.io%25252F6m4qvx%25252Fok&st._wt=1&st.client_id=-1",
            "Ok",
            "left=500,top=200,width=500,height=500"
        );
        fetch(`http://localhost:3001/userShared`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user.id,
                shared: 1,
            }),

        })
            .then((res) => res.json())
            .then((result) => dispatch(initUserAC(result)))
    }

    return (
        <div className="icons-container">
            <div className="icon" onClick={handleShareFb}></div>
            <div className="icon" onClick={handleShareVK}></div>
            <div className="icon" onClick={handleShareTW}></div>
            <div className="icon" onClick={handleShareOk}></div>
        </div>
    );
}

export default Links;
