import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StatisticsProvider } from "./context/StatisticsContext/StatisticsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StatisticsProvider>
      <App />
    </StatisticsProvider>
  </React.StrictMode>
);
