import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validator from "validator";
import Button from "../components/ButtonNew";
import { useSignupMutation } from "../redux/api/userApislice";
import { toast } from "react-toastify";

export default function Signup() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({})
  const [userSignup] = useSignupMutation()

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors({})
    const newErrors = findFormErrors()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {

      try {

        await userSignup({ name, email, password, role }).unwrap()
        setName("");
        navigate('/')
        toast.success("User registered successfully");

      } catch (error) {
        toast.error(error?.data?.message || `error`);
      }


    };
  }

  const findFormErrors = () => {

    const newErrors = {}
    if (!role) newErrors.role = "Choose role"
    if (!name || name.length > 30) newErrors.name = 'Name must be atmost 30 characters long'
    if (!validator.isEmail(email)) newErrors.email = "Enter a valid email"
    if (!validator.isStrongPassword(password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) newErrors.password = "Enter a valid password"
    if (!confirmPassword) newErrors.confirmPassword = "Enter confirm password"
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors
  }

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col items-center mt-20"
    >
      <h1 className="text-3xl font-bold mb-6">
        Sign Up
      </h1>

      <div className="flex gap-4 mb-4">
        <label>
          <input
            type="radio"
            value="user"
            checked={role === "user"}
            onChange={(e) => setRole(e.target.value)}
          />
          User
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
        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role}</p>
        )}
      </div>
      <div className="flex flex-col ">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-80 mb-4"
        />
        {errors.name && <p className="text-red-500 text-xs  w-80">{errors.name}</p>}
      </div>
      <div className="flex flex-col ">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-80 mb-4"
        />
        {errors.email && <p className="text-red-500 text-xs  w-80">{errors.email}</p>}
      </div>
      <div className="flex flex-col ">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-80 mb-4"
        />
        {errors.password && <p className="text-red-500 text-xs  w-80">{errors.password}</p>}
      </div>
      <div className="flex flex-col ">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 rounded w-80 mb-4"
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs  w-80">{errors.confirmPassword}</p>}
      </div>
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