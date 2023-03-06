import React from 'react';
import cl from "./SignPage.module.scss";
import SignForm from "../../components/SignForm/SignForm";

const SignPage = () => {
    return (
        <div className={cl.main}>

            <div className={cl.ellipse}/>
            <div className={cl.ellipse}/>
            <div className={cl.ellipse}/>

            <h1 className={cl.title}>Sign in</h1>

            <SignForm/>
        </div>
    );
};

export default SignPage;