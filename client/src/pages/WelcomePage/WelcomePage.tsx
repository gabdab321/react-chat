import React from 'react';
import cl from "./WelcomePage.module.scss";
import {Link} from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className={cl.main}>
            <div className={`${cl.ellipse} ${cl.ellipse__right}`}/>
            <div className={`${cl.ellipse} ${cl.ellipse__left}`}/>

            <h1 className={cl.title}>Welcome to TalkFlow!</h1>

            <div className={cl.block}>
                <h3 className={`${cl.subtitle} ${cl.subtitle__log}`}>Log In to start</h3>
                <Link to="/login" className={`${cl.button} ${cl.button__log}`}>Log In</Link>
            </div>
            <div className={cl.block}>
                <h3 className={`${cl.subtitle} ${cl.subtitle__sign}`}>Not registered yet?</h3>
                <Link to="/sign" className={`${cl.button} ${cl.button__sign}`}>Sign In</Link>
            </div>
        </div>
    );
};

export default WelcomePage;