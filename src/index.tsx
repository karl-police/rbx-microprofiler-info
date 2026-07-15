import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import MainLayout from "./js/UI/Layouts/MainLayout.tsx";

var b_isDevelopment = (process.env.NODE_ENV == "development")
const _BASENAME = (!b_isDevelopment) ? "/rbx-microprofiler-info" : ""


ReactDOM.createRoot( document.getElementById("root")! ).render(
  <>
  <BrowserRouter basename={_BASENAME}>
    <Routes>
      <Route element={<MainLayout/>}>
        < Route path="/*" element={<App/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);