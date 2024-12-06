import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import hobbies from "../data.js";
import { Link } from "react-router-dom";

export default function HobbyPage() {
  const { id } = useParams();
  const hobbyInfo = hobbies.find((el) => el.id === id);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Header />

      <div>
        {hobbyInfo ? (
          <div
            style={{
              width: "100%",
              height: "80vh",
              fontSize: "2em",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginTop: "100px",
            }}
          >
            <Link to={"/hobbies"}>Back</Link>
            <h1>{hobbyInfo.name}</h1>
            <p>Hobby ID: {id}</p>
            <p>Hobby Name: </p>
            <p>Hobby Description: </p>{" "}
          </div>
        ) : (
          <h1>Hobby not found</h1>
        )}
      </div>
    </div>
  );
}
