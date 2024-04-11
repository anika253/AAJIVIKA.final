import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase.config";
import { collection, doc, getDoc,setDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

export default function HierForm() {
  const [userDetails, setUserDetails] = useState(null);
  const [nal,setNal]=useState(0);
  const [lat,setLat]=useState(0);
  const [lng,setLng]=useState(0);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "hirer", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleHier = async (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(async (user) => {
      try {
        const locationRef = collection(db, "location");
        const entryDocRef = doc(locationRef);
        await setDoc(entryDocRef, {
          nal: nal,
          lat: lat,
          lng: lng,
          userid:user.uid
        });
  
        toast.success("Hiring Location Saved Successfully!!");
      } catch (error) {
        toast.error(error.message);
      }
    });
  };
  
  
  return (
    <div>
          <div className="flex justify-center mt-8">
            <div className="flex flex-col w-[40vw] p-3 bg-white rounded-md">
              <Toaster
                toastOptions={{ duration: 4000 }}
                position="bottom-center"
                reverseOrder={false}
              />
              <form onSubmit={handleHier}>
                <h2 className="text-2xl text-center font-bold mb-6">
                  Application Form for Hirer
                </h2>
                <div className="mb-3">
                  <label>No. of labourers required</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
                    placeholder="Enter labourers required"
                    onChange={(e) => setNal(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Latitude</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
                    placeholder="Enter Latitude"
                    onChange={(e) => setLat(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Longitude</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
                    placeholder="Enter Longitude"
                    onChange={(e) => setLng(e.target.value)}
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
              </form>
            </div>
          </div>
    </div>
  );
}
