import React from 'react';
import Cloud from '../Cloud/Cloud';
import Links from '../Links/Links.js';
import './Finish.css'

function Finish(props) {
    return (
        <React.Fragment>
            <Cloud />
            <p className="title vibor"> выборы </p>
            <p className="title">путешествие</p>
            <p className="title strong">близко!</p>
            <Links />
            <div className="footer" />
        </React.Fragment>
    );
}

export default Finish;