import WelcomePage from "../pages/WelcomePage/WelcomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignPage from "../pages/SignPage/SignPage";

export type route = {path: string, element: JSX.Element}

export const privateRoutes: route[] = []

export const publicRoutes: route[] = [
    {path: "/", element: <WelcomePage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/sign", element: <SignPage/>},
]