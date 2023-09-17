import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom"
import App from "../App";
import ComponentLoader from "../components/Loaders/ComponentLoader";

const LoginPage = React.lazy(() => import("../pages/Login/Login"));
const SignupPage = React.lazy(() => import("../pages/Signup/Signup"));


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        loader: ComponentLoader,
        children: [
            {
                path: "login",
                Component: LoginPage,
                loader: ComponentLoader,
            },
            {
                path: "signup",
                Component: SignupPage,
                loader: ComponentLoader,
            },
        ],
    },
]);

export default router;
