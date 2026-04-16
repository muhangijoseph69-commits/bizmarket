"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = () => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: parseFloat(price),
        image: "",
      }),
    });

    setName("");
    setPrice("");
    fetchProducts();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* HEADER */}
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
        🛒 BizMarket
      </h1>
      <p style={{ color: "gray", marginBottom: "30px" }}>
        Buy & Sell Globally
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "12px", marginRight: "10px", borderRadius: "8px" }}
          required
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "12px", marginRight: "10px", borderRadius: "8px" }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "12px 16px",
            background: "#f4c542",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Add Product
        </button>
      </form>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #eee",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ fontSize: "18px" }}>{product.name}</h3>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
