import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/main.scss";
import { RouterProvider } from "react-router-dom";
import route from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
