import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Headphones",
      price: 3000,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1500,
    },
    {
      id: 4,
      name: "Mouse",
      price: 800,
    },
  ];

  return (
    <div>
      <h2>Products</h2>

      <div className="products">
        {products.map(
          (product) => (
            <ProductCard
              key={
                product.id
              }
              product={
                product
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default ProductList;
