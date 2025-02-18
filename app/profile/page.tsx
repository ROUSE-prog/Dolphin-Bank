"use client";

import { useEffect, useState } from "react";
import { account } from "../services/appwrite";
import { useRouter } from "next/navigation";
import UserCard from "../components/UserCard";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    account.get().then((response) => {
      setUser(response);
      setName(response.name);
      setEmail(response.email);
    }).catch(() => router.push("/login"));
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await account.updateName(name);
      alert("Profile updated successfully!");
    } catch (error: any) {
      alert(error.message || "Failed to update profile.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-300 bg-opacity-30 p-6">
      <div className="glass-card w-full max-w-md p-6">
        <h2 className="text-3xl font-bold text-center text-stone-800">Profile Settings</h2>
        <h1 className="text-4xl font-extrabold text-stone-800 tracking-wide drop-shadow-lg mb-6">
        User Profile
      </h1>
      <UserCard />
      
        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="glass-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            className="glass-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            disabled
          />

          <button
            onClick={handleUpdateProfile}
            className="glass-button w-full bg-green-900 text-white py-3 rounded-lg hover:scale-105 transition duration-200"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
