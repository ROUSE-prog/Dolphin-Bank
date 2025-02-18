"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "../services/appwrite"; // Ensure correct import path

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Updated function for Appwrite v1.4+
      await account.createEmailPasswordSession(email, password);

      router.push("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error);
      alert(error.message || "Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="glass-card w-full max-w-md p-6">
        <h2 className="text-3xl font-bold text-center text-stone-800">Log In</h2>

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
            onClick={handleLogin}
            className="glass-button w-full bg-green-900 text-white py-3 rounded-lg hover:scale-105 transition duration-200"
          >
            Log In
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
