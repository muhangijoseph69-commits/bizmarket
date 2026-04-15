'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Welcome to BizMarket 🌍
      </h1>

      <p style={{ marginTop: "10px", color: "#aaa" }}>
        Your global marketplace is coming alive
      </p>

      <a
        href="/login"
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#f4c542",
          color: "black",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Get Started
      </a>
    </div>
  );
}
