import WelcomePage from "../pages/WelcomePage/WelcomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignPage from "../pages/SignPage/SignPage";
import ChatsPage from "../pages/ChatsPage/ChatsPage";

export type route = {path: string, element: JSX.Element}

export const privateRoutes: route[] = [
    {path: "/", element: <ChatsPage/>}
]

export const publicRoutes: route[] = [
    {path: "/", element: <WelcomePage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/sign", element: <SignPage/>},
]