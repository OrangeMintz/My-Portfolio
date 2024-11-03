import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import About from "./pages/About";
import Home from "./pages/Home";

const router = createBrowserRouter([
  // { path: "/", element: <App /> },
  { path: "/", element: <Home /> },
  // { path: "/about", element: <About /> },
]);

export default router;