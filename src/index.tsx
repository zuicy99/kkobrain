import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 강제형 변환
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <App />
  </>,
);
