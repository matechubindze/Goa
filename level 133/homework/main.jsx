import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StudentsContext } from "./context/StudentsContext";

const students = [
    "გიორგი",
    "ნიკა",
    "მათე",
    "დათო",
    "საბა"
    ];

    ReactDOM.createRoot(document.getElementById("root")).render(
    <StudentsContext.Provider value={students}>
        <App />
    </StudentsContext.Provider>
);
