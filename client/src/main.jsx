import React from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.PROD
  ? "https://skill-page-backend.vercel.app/api"
  : "http://locahost:3001/api";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/pablo99nunez"></Navigate>}
        ></Route>
        <Route path="/:username" element={<App></App>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
