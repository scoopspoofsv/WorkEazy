import React from "react";
import ReactDOM from "react-dom";
import App from "./public/src/App";
import SideNav from "./public/src/components/general/SideNav";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  
    <BrowserRouter>
      <div className="main-content">
        <SideNav />
        <App />
      </div>
    </BrowserRouter>,
    document.getElementById("root")
  );