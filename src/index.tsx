import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";

import MainLayout from "./js/UI/Layouts/MainLayout.tsx";


ReactDOM.createRoot( document.getElementById("root")! ).render(
  <>
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        < Route path="/*" element={<App/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);