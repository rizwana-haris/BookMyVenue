import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validator from "validator";
import Button from "../components/ButtonNew";
import { useLoginMutation } from "../redux/api/userApislice";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})
  const [userLogin] = useLoginMutation()

  const handleLogin = async (e) => {

    e.preventDefault();
    setErrors({})
    const newErrors = findFormErrors()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {

      try {

        await userLogin({ email, password }).unwrap()
        navigate('/')
      } catch (error) {
        toast.error(error?.data?.message);
      }
    };
  };

  const findFormErrors = () => {

    const newErrors = {}
    if (!validator.isEmail(email)) newErrors.email = "Enter a valid email"
    if (!validator.isStrongPassword(password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) newErrors.password = "Enter a valid password"
    return newErrors
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold
      mb-6">
        Login
      </h1>
      <div className="flex flex-col ">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)}
          className="border p-2 rounded w-80
        mb-4"
        />
        {errors.email && <p className="text-red-500 text-xs  w-80">{errors.email}</p>}
      </div>
      <div className="flex flex-col ">
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) =>
            setPassword(e.target.value)}
          className="border p-2 rounded w-80
        mb-4"
        />
        {errors.password && <p className="text-red-500 text-xs  w-80">{errors.password}</p>}
      </div>

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
