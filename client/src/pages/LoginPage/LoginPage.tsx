import React, {useState} from 'react';
import {Form, Formik, Field, FormikHelpers} from 'formik';
import cl from "./LoginPage.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import checkLogin from "../../utils/checkLogin";
import {setLogged} from "../../redux/slices/loggedSlice";
import Error from "../../components/UI/Error/Error";
import {useNavigate} from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className={cl.main}>
            <div className={cl.ellipse}/>
            <div className={cl.ellipse}/>
            <div className={cl.ellipse}/>

            <h1 className={cl.title}>Log in</h1>
            
            <LoginForm/>
        </div>
    );
};

export default LoginPage;