import React from "react";
import Header from "../components/Header.jsx";

export default function Home() {
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
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "100px",
          gap: "20px",
        }}
      >
        {" "}
        <img src="download.jpg" alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "baseline",
            fontSize: "2em",
          }}
        >
          <h1>Nini Shubitidze</h1>
          <p>გამარჯობა, მე ვარ ნინო შუბითიზე, 16 წლის.</p>
        </div>
      </div>
      <div style={{marginLeft: "50px"}}>
        <h2>Contact info:</h2>
        <h3>@Nin15</h3>
        <h3>ninomqvia@gmail.com</h3>
      </div>
    </div>
  );
}
