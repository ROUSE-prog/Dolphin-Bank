"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "../services/appwrite"; // Ensure this path is correct

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Email validation function
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Sign-up function with validation
  const handleSignup = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const user = await account.create("unique()", email, password);
      console.log("Sign-up successful:", user);
      router.push("/dashboard"); // Redirect after successful sign-up
    } catch (error: any) {
      console.error("Sign-up error:", error);
      alert(error.message || "An error occurred during sign-up.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="glass-card w-full max-w-md p-6">
        <h2 className="text-3xl font-bold text-center text-stone-800">Sign Up</h2>

        <div className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glass-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleSignup}
            className="glass-button w-full bg-green-900 text-white py-3 rounded-lg hover:scale-105 transition duration-200"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
