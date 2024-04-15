import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import CityDetails from "./components/CityDetails.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement

);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/city/:cityName" element={<CityDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


