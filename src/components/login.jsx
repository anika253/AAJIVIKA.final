import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.config";
import { toast, Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/admin";
      toast.success("User logged in Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col w-[30vw] p-3 bg-white rounded-md">
        <Toaster
          toastOptions={{ duration: 4000 }}
          position="bottom-center"
          reverseOrder={false}
        />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-2xl text-center font-bold mb-6">
            Login As Hirer
          </div>
          <div className="mb-3">
            <label className="block mb-1">Email address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-gray-600 transition duration-300"
            >
              Submit
            </button>
          </div>
          <p className=" text-right">
            New user{" "}
            <a href="/register" className="text-blue-600">
              Register Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
