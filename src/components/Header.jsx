import React from "react";
import { Link } from "react-router-dom";
import Hobbies from "../pages/Hobbies";


export default function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "44px",
        backgroundColor: "lightgray",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        textDecoration: "none",
        marginTop: "0px",

      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/hobbies"}>Hobbies</Link>
    </div>
  );
}
