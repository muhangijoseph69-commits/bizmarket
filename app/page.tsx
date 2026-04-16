"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
        BizMarket 🌍
      </h1>

      <p style={{ color: "gray", marginBottom: "20px" }}>
        Global Marketplace
      </p>

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
