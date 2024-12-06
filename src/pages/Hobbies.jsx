import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import hobbies from "../data.js";

export default function Hobbies() {
 
 
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100dvh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          height: "100dvh",
        }}
      >
        <div
          style={{
            marginTop: "10px",
            width: "200px",
            height: "200px",
            backgroundColor: "lightgray",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {" "}
          {hobbies.map((hobby) => (
            <div key={hobby.id}>
              <Link
                style={{
                  cursor: "pointer",
                }}
                to={`/hobbies/${hobby.id}`}
              >
                <h3>{hobby.name}</h3>
                <button>Show more</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

