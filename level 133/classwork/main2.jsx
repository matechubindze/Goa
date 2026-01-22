import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyContextWrapper } from "./context/context2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MyContextWrapper>
        <App />
    </MyContextWrapper>
);
