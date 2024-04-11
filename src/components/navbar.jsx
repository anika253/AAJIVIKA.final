import React, { useEffect, useState } from "react";
import { auth } from "../firebase.config";
export default function Navbar() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div className="bg-black text-white text-center flex w-full">
      <div className="flex justify-center ml-36 p-4 font-bold text-3xl text-white w-[90vw]">
        <a href="/">AJIVIKA</a>
      </div>
      <div className="pt-5">
        {user ? (
          <button
            className="border mr-12 border-solid rounded-md h-2/3 px-3 bg-gray-800"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <a href="/login">
            <button className="border mr-12 border-solid rounded-md h-2/3 px-3 bg-gray-800">
              Admin
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
