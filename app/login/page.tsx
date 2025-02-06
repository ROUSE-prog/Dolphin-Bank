"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-300 p-6">
      {/* Login Card */}
      <div className="glass-card w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-stone-800 text-center">Login</h1>

        <form className="mt-6" onSubmit={handleLogin}>
          {/* Input Fields */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glass-input w-full"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="glass-button w-full bg-green-900 mt-6"
          >
            Sign In
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-stone-800 mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-green-500 hover:text-green-400 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
