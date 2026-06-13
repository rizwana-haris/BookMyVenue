import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ButtonNew";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Login API integration will be added later
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold
      mb-6">
        Login
      </h1>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)}
        className="border p-2 rounded w-80
        mb-4"
      />


      <input
        type="password"
        value={password}
        placeholder="Enter password"
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
        type="submit"
      >
        Login
      </Button>

      <p className="text-sm mt-4">
        Don't have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </p>
    </form>
  );
}