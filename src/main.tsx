import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga";
import "@fontsource/poppins";
import "@fontsource-variable/dm-sans";

import "./index.css";
import App from "./App.tsx";

const TRACKING_ID = "G-7F260S81M5";
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
