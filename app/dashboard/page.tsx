import { useEffect, useState } from "react";
import UserCard from "../components/UserCard"; // ✅ Import UserCard

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-300 bg-opacity-30 p-6">
      <header className="w-full flex justify-between items-center py-6">
        <h1 className="text-4xl font-extrabold text-stone-800 tracking-wide drop-shadow-lg">
          Dolphin Bank
        </h1>
        <p className="text-lg text-stone-800 font-semibold">
          {user?.name ? `Welcome, ${user.name}` : "Welcome, User"}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* ✅ Display UserCard to the left of Account Balance */}
        <UserCard />

        <div className="glass-card col-span-1 p-6">
          <h2 className="text-2xl font-semibold text-stone-800">Account Balance</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">$5,000.00</p>
        </div>
      </div>
    </div>
  );
}
