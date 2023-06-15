import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/home/Home";
import { Detail } from "../pages/detail/Detail";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <NotFound />
            },
            {
                path: "/:code",
                element: <Detail />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <main className="main__con">
            <React.Fragment>
                <RouterProvider router={Router} />
            </React.Fragment>
        </main>
    );
};


