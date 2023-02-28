import React from 'react';
import cl from "./SignPage.module.scss";

const SignPage = () => {
    return (
        <div className={cl.main}>
            <div className={cl.ellipse}/>
            <div className={cl.ellipse}/>
            <div className={cl.ellipse}/>

            <h1 className={cl.title}>Sign in</h1>
            <form className={cl.form}>
                <input placeholder="Username" className={cl.input} />
                <input placeholder="Password" className={cl.input} />
            </form>
            <button className={cl.button}>Continue</button>
        </div>
    );
};

export default SignPage;