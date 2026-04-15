'use client';

import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    alert("Login coming next step...");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        Login to BizMarket
      </h1>

      <button
        onClick={handleLogin}
        style={{
          marginTop: "20px",
          padding: "14px 20px",
          background: "#f4c542",
          color: "black",
          borderRadius: "10px",
          fontWeight: "bold",
          border: "none"
        }}
      >
        {loading ? "Loading..." : "Continue"}
      </button>
    </div>
  );
}
