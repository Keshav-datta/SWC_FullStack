import { useState } from "react";

function RetryFetcher() {
  const [data, setData] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [attempts, setAttempts] =
    useState(0);

  async function fetchWithRetry(
    retries = 3
  ) {
    setLoading(true);
    setError("");
    setData(null);

    for (
      let attempt = 1;
      attempt <= retries;
      attempt++
    ) {
      try {
        setAttempts(attempt);

        const response =
          await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
          );

        if (!response.ok) {
          throw new Error(
            "Request Failed"
          );
        }

        const result =
          await response.json();

        setData(result);

        setLoading(false);

        return;
      } catch (err) {
        if (attempt === retries) {
          setError(
            `Failed after ${retries} retries`
          );

          setLoading(false);
        }
      }
    }
  }

  return (
    <div className="container">
      <button
        onClick={() =>
          fetchWithRetry()
        }
      >
        Fetch Data
      </button>

      {loading && (
        <div className="status">
          <p>
            Attempt {attempts}/3...
          </p>

          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {data && (
        <div className="card">
          <h3>{data.title}</h3>

          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default RetryFetcher;
