import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("_root")!).render(
  <BrowserRouter>
    <Routes>
      < Route path="/" element={<App/>} />
    </Routes>
  </BrowserRouter>
);