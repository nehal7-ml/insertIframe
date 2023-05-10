import React from "react";
import ReactDOM from 'react-dom'
import "../index.css";
import Iframe from "../components/Iframe";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.render(
  <React.StrictMode>
    <Iframe />
  </React.StrictMode>,
  root,
);