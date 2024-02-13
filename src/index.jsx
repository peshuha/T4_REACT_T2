import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Main from "./pages/Main/main.jsx";
import Dots from "./pages/Dots/dots.jsx";
import External from "./pages/External/External.jsx";

const router = createBrowserRouter([
    {path: "/", element: <Main />}
    , {path: "/dots", element: <Dots />}
    , {path: "/post", element: <External />}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
