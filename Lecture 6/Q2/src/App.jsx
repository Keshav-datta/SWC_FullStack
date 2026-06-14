import { useState } from "react";
import "./styles/App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid =
    emailRegex.test(email);

  const isPasswordValid =
    password.length >= 8;

  const isFormValid =
    isEmailValid && isPasswordValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login Successful!");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            {email.length > 0 &&
              !isEmailValid && (
                <p className="error">
                  Invalid Email Format
                </p>
              )}
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {password.length > 0 &&
              !isPasswordValid && (
                <p className="error">
                  Password must contain at least
                  8 characters
                </p>
              )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
