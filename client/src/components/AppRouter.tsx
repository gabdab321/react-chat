import React from 'react';
import {Routes, Route} from "react-router-dom"
import {privateRoutes, publicRoutes} from "../consts/routes";

const AppRouter = () => {
    const isLogged = false

    return (
        <Routes>
            {isLogged ?
                privateRoutes.map(route => <Route key={route.path} {...route} />)
                :
                publicRoutes.map(route => <Route key={route.path} {...route} />)
            }
        </Routes>
    );
};

export default AppRouter;