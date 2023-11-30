import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./components/Categories/Categories.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Root from "./components/Root/Root.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
      },
      {
        path: "/categorys",
        element: <Categories></Categories>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
