"use client";

import { useEffect, useState } from "react";
import { account } from "../services/appwrite";
import { useRouter } from "next/navigation";
import { CalendarIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    account
      .get()
      .then((response) => setUser(response))
      .catch(() => router.push("/login"));
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      router.push("/login");
    } catch (error: any) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-300 bg-opacity-30 p-6">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6">
        <h1 className="text-4xl font-extrabold text-stone-800 tracking-wide drop-shadow-lg">
          Dolphin Bank
        </h1>
        
        <div className="flex items-center space-x-6">
          {/* Ensure user is loaded before rendering their name */}
          <p className="text-lg text-stone-800 font-semibold">
            {typeof window !== "undefined" && user?.name
              ? `Welcome, ${user.name}`
              : "Welcome, User"}
          </p>

          {/* Log Out Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* Account Summary Card */}
        <div className="glass-card col-span-1 p-6">
          <h2 className="text-2xl font-semibold text-stone-800">Account Balance</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">$5,000.00</p>
          
          {/* ✅ FIXED BUTTON SPACING */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="glass-button bg-green-800 bg-opacity-70 w-1/3 min-w-[120px]">
              Transfer
            </button>
            <button className="glass-button bg-green-800 bg-opacity-70 w-1/3 min-w-[120px]">
              Add Funds
            </button>
            <button className="glass-button bg-green-800 bg-opacity-70 w-1/3 min-w-[120px]">
              Withdraw
            </button>
          </div>
        </div>

        {/* Activity Chart Card */}
        <div className="glass-card col-span-1 p-6">
          <h2 className="text-2xl font-semibold text-stone-800">Weekly Activity</h2>
          <p className="text-4xl font-bold text-stone-800 mt-2">72%</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-stone-800">Savings Growth</span>
            <ArrowTrendingUpIcon className="h-6 w-6 text-green-800" />
          </div>
        </div>

        {/* Calendar Card */}
        <div className="glass-card col-span-1 p-6">
          <h2 className="text-2xl font-semibold text-stone-800">Upcoming Payments</h2>
          <div className="mt-4 flex items-center space-x-2">
            <CalendarIcon className="h-6 w-6 text-green-800" />
            <span className="text-stone-800">Jan 25 - Credit Card Payment</span>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <CalendarIcon className="h-6 w-6 text-green-800" />
            <span className="text-stone-800">Feb 10 - Rent Payment</span>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="glass-card col-span-2 p-6">
          <h2 className="text-2xl font-semibold text-stone-800">Recent Transactions</h2>
          <div className="mt-4 space-y-4">
            <div className="glass-transaction">
              <span>Amazon Purchase</span>
              <span className="text-green-900">- $120.00</span>
            </div>
            <div className="glass-transaction">
              <span>Freelance Payment</span>
              <span className="text-green-600">+ $800.00</span>
            </div>
            <div className="glass-transaction">
              <span>Grocery Shopping</span>
              <span className="text-green-900">- $45.00</span>
            </div>
          </div>
        </div>

        {/* Ads / Extra Section */}
        <div className="glass-card col-span-1 p-6">
          <h2 className="text-2xl font-semibold text-stone-800">Dolphin Premium</h2>
          <p className="text-stone-800 mt-2">Get exclusive benefits with Dolphin Bank.</p>
        </div>
      </div>
    </div>
  );
}
