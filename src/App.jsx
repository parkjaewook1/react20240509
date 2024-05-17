import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App(props) {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <div>about 페이지 화면</div>,
    },
    {
      path: "/search",
      element: <div>search 페이지 화면</div>,
    },
    {
      path: "/home",
      element: <div>home 페이지 화면</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
