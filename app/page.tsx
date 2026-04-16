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
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
        BizMarket 🌍
      </h1>

      {/* CREATE PRODUCT FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
          required
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
          required
        />
        <button type="submit" style={{ padding: "10px" }}>
          Add Product
        </button>
      </form>

      {/* PRODUCTS LIST */}
      {products.length === 0 ? (
        <p>No products yet...</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
