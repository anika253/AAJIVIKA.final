import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

function Register() {
  const [hiringLocation, setHiringLocation] = useState("");
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "hirer", user.uid), {
          email: user.email,
          hiringLocation: hiringLocation,
          name: name,
          uid: uid,
        });
      }
      toast.success("User Registered Successfully!!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col w-[30vw] p-3 bg-white rounded-md">
        <Toaster
          toastOptions={{ duration: 4000 }}
          position="bottom-center"
          reverseOrder={false}
        />
        <form onSubmit={handleRegister}>
          <h2 className="text-2xl text-center font-bold mb-6">
            Application Form for Hirer
          </h2>
          <div className="mb-3">
            <label>Hiring Location</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter Hiring Location"
              onChange={(e) => setHiringLocation(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>UID</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder=" Enter UID"
              onChange={(e) => setUid(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="w-full bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-gray-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered{" "}
            <a href="/login" className="text-blue-600">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
