"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Dynamically load the p5.js component (for client-side only)
const P5Wrapper = dynamic(() => import("./p5canvas"), { ssr: false });

export default function WelcomePage() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 1500); // Fade in after 1.5s
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-green-300">
      {/* P5.js Background */}
      <P5Wrapper />

      {/* Content Overlay */}
      {showContent && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-stone-800 px-6 text-center z-10 animate-fade-in">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome to Dolphin Bank</h1>
          <p className="text-lg mt-4 max-w-2xl">
            Your secure and modern banking experience, designed for the future.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-3 bg-green-800 bg-opacity-70 text-white font-bold rounded-lg shadow-lg hover:bg-green-900 hover:scale-105 transition duration-300"
            >
              Log In
            </button>

            <button
              onClick={() => router.push("/signup")}
              className="px-8 py-3 bg-green-600 bg-opacity-70 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
