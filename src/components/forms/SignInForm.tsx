import React, { useState } from "react";
import AuthBtns from "../buttons/AuthBtns";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] md:w-[80%] lg:w-[60%] h-auto max-w-[650px] max-h-[fit-content] bg-[#f8f9fadb] shadow-md rounded-lg p-10 text-center">
      <h3 className="text-habit-light-purple font-bold text-center text-[15px] md:text-[20px]">
        Log in to HabitHub
      </h3>
      <p className="w-[80%] md:w-[50%] mx-auto text-[10px] md:text-[13px] font-light text-center mt-4">
        Welcome back! Sign in using your social account or email to continue us
      </p>
      <AuthBtns />
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center mt-5"
      >
        <input
          type="text"
          placeholder="Email"
          className="w-[90%] md:w-[50%] mx-auto text-[10px] md:text-[13px] placeholder:font-light outline-none mt-4 py-2 px-3 rounded-lg "
        />
        <div className="w-[90%] md:w-[50%] mx-auto text-center relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full text-[10px] md:text-[13px] placeholder:font-light outline-none mt-4 py-2 px-3 rounded-lg "
          />
          <div
            onClick={() => setShowPass((prevState) => !prevState)}
            className="absolute right-4 top-6 md:top-7 text-gray-600 cursor-pointer"
          >
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        <button
          type="submit"
          className="w-[100px] py-1 shadow-md rounded-xl mx-auto text-[13px] md:text-[18px] text-center mt-10 bg-white hover:bg-gray-200 font-medium"
        >
          Login
        </button>
      </form>
      <button className="font-light mt-5 text-[10px] md:text-[14px]">
        Need an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-400 font-medium hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </button>
    </div>
  );
};

export default SignInForm;
