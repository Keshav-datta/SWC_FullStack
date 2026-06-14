import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <h1>
        Shopping Cart System
      </h1>

      <div className="layout">
        <ProductList />

        <Cart />
      </div>
    </div>
  );
}

export default App;
