import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";

const productUrl = import.meta.env.VITE_PRODUCT_API_URL;

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(productUrl)
      .then((response) => response.json())
      .then((json) => setProducts(json));
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
