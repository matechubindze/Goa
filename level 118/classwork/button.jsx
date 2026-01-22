import React, { useContext } from "react";
import { MyContext } from "./context/MyContext";

function Button() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}

export default Button;
