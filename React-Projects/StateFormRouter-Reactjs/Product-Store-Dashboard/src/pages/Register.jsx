import { useState } from "react";

function Register() {
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError(" Your Name must be at least 4 Characters");
      return;
    }
    setError("");

    alert(` Welcome ${name} Registration Successful`);

    setName("");
  };

  return (
    <div className="form">
      <h1> Register From</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Register;
