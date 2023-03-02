import React, {useState} from 'react';
import {Field, Form, Formik, FormikHelpers} from "formik";
import cl from "./LoginForm.module.scss";
import Error from "../UI/Error/Error";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import checkLogin from "../../utils/checkLogin";
import {setLogged} from "../../redux/slices/loggedSlice";

interface LoginState {
    username: string
    password: string
}

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const {username, password} = useAppSelector(state => state.user)
    const user: LoginState = {username, password}
    const [error, setError] = useState<boolean>(false)

    const login: LoginState = {
        username: "",
        password: ""
    }

    function onSubmit(value: LoginState, { setSubmitting }: FormikHelpers<LoginState>) {
        if(checkLogin(user, value)) {
            dispatch(setLogged(true))
            navigate("/")

            return
        }

        setError(true)
        setTimeout(() => setError(false), 10000)
        setSubmitting(false)
    }

    return (
        <Formik initialValues={login} onSubmit={onSubmit}>
            <Form className={cl.form}>
                <Field id="username" name="username" placeholder="Username" className={cl.input}/>
                <Field type="password" id="password" name="password" placeholder="Password" className={cl.input} />
                <Error visible={error} message="Wrong username or password."/>
                <button type="submit" className={cl.button}>Continue</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;