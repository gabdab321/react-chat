import React from 'react';
import {Routes, Route} from "react-router-dom"
import {privateRoutes, publicRoutes} from "../consts/routes";
import {useAppSelector} from "../hooks/redux";

const AppRouter = () => {
    const {logged} = useAppSelector(state => state.logged)

    return (
        <Routes>
            {logged ?
                privateRoutes.map(route => <Route key={route.path} {...route} />)
                :
                publicRoutes.map(route => <Route key={route.path} {...route} />)
            }
        </Routes>
    );
};

export default AppRouter;