import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch data"
        );
      }

      const data =
        await response.json();

      setProducts(data.slice(0, 12));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading data...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="card"
        >
          <h3>{product.title}</h3>

          <p>{product.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
