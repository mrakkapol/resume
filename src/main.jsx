import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Headder from "./component/headder.jsx";
import Content from "./component/Content.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Headder />
    <Content />
  </React.StrictMode>
);
