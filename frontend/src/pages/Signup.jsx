import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ButtonNew";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Signup API integration will be added later
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col items-center mt-20"
    >
      <h1 className="text-3xl font-bold mb-6">
        Sign Up
      </h1>

      <label className="mb-2 font-semibold">
        Select Role
      </label>

      <div className="flex gap-4 mb-4">
        <label>
          <input
            type="radio"
            value="customer"
            checked={role === "customer"}
            onChange={(e) => setRole(e.target.value)}
          />
          Customer
        </label>

        <label>
          <input
            type="radio"
            value="owner"
            checked={role === "owner"}
            onChange={(e) => setRole(e.target.value)}
          />
          Venue Owner
        </label>
      </div>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-80 mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-80 mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-80 mb-4"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border p-2 rounded w-80 mb-4"
      />

      <Button buttonV="primary" type="submit">
        Sign Up
      </Button>

      <p className="text-sm mt-4">
        Already have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </form>
  );
}