import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import Finish from './components/Finish/Finish';
import { Provider } from 'react-redux'
import store from './utils/redux/store'

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/finish" element={<Finish />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

