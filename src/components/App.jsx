import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "../pages/Home.jsx";
import Details from "./Details.jsx";
import Category from "../pages/Category.jsx";
import Error from "./Error.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/item/:id",
          element: <Details />,
        },
        {
          path: "/category/:categoryName",
          element: <Category />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
