import { useState } from "react";
import Button from "./components/ButtonNew";
export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  function handleLogin() {
    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold
      mb-6">
        Login
      </h1>
      <label className="mb-2 font-semibold">
        Select Role
      </label>

      <div className="flex gap-4">

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
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)}
        className="border p-2 rounded w-80
        mb-4"
      />


      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)}
        className="border p-2 rounded w-80
        mb-4"
      />

      <p className="text-sm mb-4
         text-blue-600 cursor-pointer
         hover:underline"
        onClick={() => console.log("Forgot Password Clicked")}
      >
        Forgot Password?
      </p>

      <Button
        buttonV="primary"
        onClick={handleLogin}
      >
        Login
      </Button>

      <p className="text-sm mt-4">
        Don't have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => console.log("Navigate to Signup")}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}