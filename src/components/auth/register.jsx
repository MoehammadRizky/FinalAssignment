"use client";
import { useState } from "react";
import React from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    const { username, email, password } = registerData;

    if (!username || !email || !password) {
      console.log("All field must be filled!");
      return;
    }

    const res = await fetch("/api/v1/auth/register",{
      method: "POST",
      body: JSON.stringify(registerData),
    })
    const data = await res.json();
    console.log(data);

  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 rounded-[15px] bg-white shadow-2xl  md:flex-row md:space-y-0 overflow-hidden">
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-black">
            Create Account
          </span>
          <span className="font-light text-black mb-8">
            Please Enter your Name, Email, and Password
          </span>
          <div className="">
            <span className=" text-md text-black">Name</span>
            <input
              type="text"
              className="w-full p-2 border border-black rounded-md  bg-white "
              name="username"
              id="username"
              onChange={handleChangeInput}
            />
          </div>
          <div className="py-4">
            <span className=" text-md text-black">Email</span>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md bg-white "
              onChange={handleChangeInput}
            />
          </div>
          <div className="">
            <span className=" text-md text-black">Password</span>
            <input
              type="password"
              name="password"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <span className="flex justify-center text-gray-500">
                By signing up you agree to our terms
                <br />
                condition and privacy policy
              </span>
            </div>
          </div>
          <button onClick={handleRegister} className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:  hover:border hover:border-gray-300">
            Sign in
          </button>
          {/* <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            Sign in with Google
          </button> */}
          <div className="text-center text-gray-400">
            <span className="font-bold text-black">
              Already have an account? <a className=" hover: text-green-700" href="/login">Log In!</a>{" "}
            </span>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div className="relative">
          <img
            src="image.png"
            alt=""
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
