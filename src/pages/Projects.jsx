
    import React from 'react'
import Header from "../components/Header";


export default function Hobbies() {
  return (
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100dvh",
        backgroundColor: "#f8f9fa",}}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "20px",
          
        }}
      >
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <img src="react.webp" alt="" />
          <h3>Project</h3>
          <h3>https://github.com/Nin15/Shualeduri.git</h3>
          <h3>shualeduri-beta.vercel.app</h3>
        </div>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <img src="react.webp" alt="" />
          <h3>Project</h3>
          <h3>https://github.com/Nin15/homework3.git</h3>
          <h3>homework3-roan.vercel.app</h3>
        </div>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <img src="react.webp" alt="" />
          <h3>Project</h3>
          <h3>hhttps://github.com/Nin15/homework4.git</h3>
          <h3>homework4-wheat.vercel.app</h3>
        </div>
      </div>
    </div>
  );
}

 