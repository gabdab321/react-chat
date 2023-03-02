import React from 'react';
import {Field, Form, Formik, FormikHelpers} from "formik";
import cl from "./SignForm.module.scss";
import {checkPassword, checkPublicName, checkUsername} from "../../utils/checkSign";
import {IUser} from "../../models/IUser";
import {setUser} from "../../redux/slices/userSlice";
import {setLogged} from "../../redux/slices/loggedSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";

const SignForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const user: IUser = {
        publicName: "",
        username: "",
        password: ""
    }

    function onSubmit(value: IUser, { setSubmitting }: FormikHelpers<IUser>) {
        dispatch(setUser(value))
        dispatch(setLogged(true))
        navigate("/")

        setSubmitting(false);
    }

    return (
        <Formik initialValues={user} onSubmit={onSubmit}>
            {({ errors, touched }) => (
                <Form className={cl.form}>
                    <Field validate={checkUsername} className={`${cl.input} ${cl.input__1}`} id="username" name="username" placeholder="Username" />
                    {errors.username && touched.username ? <div className={cl.error}>{errors.username}</div> : null}

                    <Field validate={checkPublicName} className={`${cl.input} ${cl.input__2}`} id="publicName" name="publicName" placeholder="Your public name" />
                    {errors.publicName && touched.publicName ? <div className={cl.error}>{errors.publicName}</div> : null}

                    <Field validate={checkPassword} className={`${cl.input} ${cl.input__3}`} id="password" name="password" placeholder="Password" type="password"/>
                    {errors.password && touched.password ? <div className={cl.error}>{errors.password}</div> : null}

                    <button type="submit" className={cl.button}>Continue</button>
                </Form>
            )}
        </Formik>
    );
};

export default SignForm;