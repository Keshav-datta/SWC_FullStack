import RetryFetcher from "./components/RetryFetcher";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <h1>API Retry Mechanism</h1>

      <RetryFetcher />
    </div>
  );
}

export default App;
