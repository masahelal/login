import React from "react";
import { useState } from "react";
/*import Dashboard from "./pages/Dashboard";*/
import { useNavigate } from "react-router-dom";
function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const validate = () => {
    const newErrors = {};
    const emailErr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "The Email is Required";
    } else if (!emailErr.test(email)) {
      newErrors.email = "InValid Email";
    }
    if (!password) {
      newErrors.password = "The Password is Required";
    } else if (password.length < 8) {
      newErrors.password = "It's too short";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
    } else {
      setError({});
      navigate("/dashboard");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const formErrors = validate();
    setError(formErrors);
  };
  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
    const formErrors = validate();
    setError(formErrors);
  };

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <h1 className="font-serif font-bold mt-7 ml-10 text-lg ">
          TheCubeFactory
        </h1>
        <h1 className="text-4xl font-bold mt-20 ml-40 ">Welcome back</h1>
        <h6 className="text-gray-500  mt-2 ml-40">Please enter your details</h6>
        <form onSubmit={handleSubmit}>
          <h5 className="font-bold mt-5 ml-40">Email adress</h5>
          <input
            type="email"
            className={`mt-2 ml-40 rounded-md p-1 w-96 focus:outline-none focus:ring-2 
                ${
                  error.email
                    ? "border border-red-500 ring-red-500"
                    : "border border-purple-500 "
                }`}
            value={email}
            onChange={handleEmailChange}
          ></input>

          <h5 className="font-bold mt-2 ml-40 ">Password</h5>
          <input
            type="password"
            className={`mt-2 ml-40 rounded-md p-1 w-96 focus:outline-none focus:ring-2 
                ${
                  error.password
                    ? "  border border-red-500 ring-red-500"
                    : " border  border-purple-500"
                }`}
            value={password}
            onChange={handelPasswordChange}
          ></input>

          <label className="flex items-center mt-5 ml-20 space-x-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="w-4 h-4 ml-20"
            />
            <span> Remember in 30 days</span>
          </label>
          <button
            type="submit"
            className="mt-5 ml-40 bg-purple-500 text-white  border border-purple-500 p-2 w-96  font-bold hover:bg-grey-300"
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <img
          src="/login.png"
          alt="Login"
          className="w-full ml-96w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
export default Login;
