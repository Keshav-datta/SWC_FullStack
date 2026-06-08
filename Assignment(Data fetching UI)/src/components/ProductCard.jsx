import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>{product.body}</p>
    </div>
  );
}

export default ProductCard;
