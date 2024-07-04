import React from "react";
import Navbar from "../layouts/Navbar";
import MainBg from "../components/backgrounds/MainBg";
import { useNavigate } from "react-router-dom";
import MainCards from "../layouts/MainCards";
import advertisement from "../assets/advertisement.png";
import mentalHealth from "../assets/mental-health.png";
import Footer from "../layouts/Footer";
import googlePlay from "../assets/google-play.svg";
import appStore from "../assets/app-store.svg";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-[100rem] md:min-h-[87rem] max-w-[1800px] mx-auto">
      <Navbar />
      <MainBg />
      <div className="flex flex-col items-center">
        <div className="mt-[150px] lg:my-0 mx-[50px] lg:mx-0 lg:absolute top-[130px] left-[50px] md:left-[100px] space-y-4 md:space-y-6 lg:space-y-8 flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-6xl">Do your tasks</h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl">
            <span className="font-bold">quickly</span> and{" "}
            <span className="font-bold">easy</span>
          </h1>
          <p className="text-md md:text-lg lg:text-xl font-extralight">
            Your tasks, your rules, our support
          </p>
          <button
            onClick={() => navigate("/signin")}
            className="text-sm md:text-md bg-white py-2 px-5 w-[140px]  md:w-[160px] rounded-xl shadow-md font-bold hover:bg-gray-100"
          >
            Get Started
          </button>
        </div>
        <MainCards />
        <div className="mb-[50px] lg:my-0 mx-[50px] lg:absolute top-[975px] md:top-[750px] md:left-10">
          <img
            src={advertisement}
            alt="advertisement"
            className="w-[400px] md:w-[500px] lg:w-[600px] xl:w-[650px] object-fit rounded-xl shadow-xl"
          />
          <div className="relative flex gap-2 justify-start items-center lg:absolute bottom-8 left-5 md:bottom-14 md:left-7 xl:bottom-16 xl:left-10">
            <img
              src={googlePlay}
              alt="google-play"
              className="w-[50px] xl:w-[100px] cursor-pointer absolute lg:static bottom-0"
            />
            <img
              src={appStore}
              alt="app-store"
              className="w-[50px] xl:w-[100px] cursor-pointer absolute left-[60px] lg:static bottom-0"
            />
          </div>
        </div>
        <div className="mb-[100px] lg:my-0 mx-[30px] me-[15px] lg:mx-0 lg:absolute top-[1320px] md:top-[1000px] left-5 md:left-[750px] lg:left-[800px] xl:left-[850px]">
          <div className="relative w-[95%] max-w-[400px] max-h-[300px] xl:max-w-[600px] flex flex-col justify-center items-center px-3 md:px-0 py-5 bg-habit-light-gray shadow-md rounded-xl">
            <img
              src={mentalHealth}
              alt="mental-health"
              className="w-[150px] md:w-[200px] h-[fit-content] lg:absolute -top-12 md:-top-40 lg:-top-50 object-fit"
            />
            <p className="text-[10px] md:text-[13px] md:pt-5 md:pb-5 md:px-3">
              <strong>Maximize</strong> productivity and prioritize{" "}
              <strong>mental wellness</strong> with our website version.
              Seamlessly blending mindfulness and{" "}
              <strong>task management</strong>, our platform offers a
              comprehensive solution for your daily challenges.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
