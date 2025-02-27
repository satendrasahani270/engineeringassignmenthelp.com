import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import NotFound from "./NotFound/404.jsx";
import Contact from "./components/Contact.jsx";

// Define routes using createBrowserRouter
const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: {
      v7_startTransition: true, // Enables React.startTransition behavior
      v7_relativeSplatPath: true, // Enables new relative route resolution
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
