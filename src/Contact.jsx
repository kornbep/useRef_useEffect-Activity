import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Thankyou from "./Thankyou.jsx";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Check if Name or Email is empty
    if (name.trim() === "" || email.trim() === "") {
      setError("Please enter your name and email.");
      return;
    }

    setError("");

    navigate("/thank-you");
  }

  return (
    <div>
      <h1>Welcome to Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Show error only when there is an error */}
        {error && <p>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;