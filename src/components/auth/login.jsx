"use client";
import { POST } from "@/app/api/v1/cafes/route";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }

  const router = useRouter();

  async function handleLogin(formData) {
    const { email, password } = loginData;

    if (!email || !password) {
      console.log("All Field must be filled!");
      return;
    }

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });

    if (res.status === 401 || res.status === 404) {
      const { errorMessage } = await res.json();
      toast.error(errorMessage);
      return;
    }

    const { data, message } = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    toast.success(message);
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 rounded-[1px] bg-white shadow-2xl  md:flex-row md:space-y-0 overflow-hidden">
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-black">
            Welcome back
          </span>
          <span className="font-light text-black mb-8">
            Please enter your details
          </span>
          {/* <div className="">
                    <span className=" text-md text-black">Name</span>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md placeholder:white "
                        name="userName"
                        id="userName"
                    />
                </div> */}
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
            <span className="font-bold text-md text-black">
              Forgot password
            </span>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:border hover:border-gray-300"
          >
            Log in
          </button>
          {/* <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            Log in with Google
          </button> */}
          <div className="text-center text-gray-400">
            <span className="font-bold text-black  ">
              Dont have an account?{" "}
              <a className=" hover: text-green-700" href="/register">
                Sign Up!
              </a>{" "}
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

export default Login;
