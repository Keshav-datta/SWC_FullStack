import ProductList from "./components/ProductList";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Data Fetching UI</h1>
        <p>React API Fetch Example</p>
      </header>

      <ProductList />
    </div>
  );
}

export default App;
