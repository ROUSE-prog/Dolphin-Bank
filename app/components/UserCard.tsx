import { useEffect, useState } from "react";

export default function UserCard() {
  const [user, setUser] = useState<any>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    // ✅ Fetch stored profile photo from localStorage
    const storedPhoto = localStorage.getItem("profilePic");
    if (storedPhoto) {
      setProfilePic(storedPhoto);
    }
  }, []);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        // ✅ Save the base64 image to local storage
        localStorage.setItem("profilePic", reader.result);
        setProfilePic(reader.result);
        console.log("Profile photo saved to local storage.");
      }
    };
  };

  return (
    <div className="glass-card p-6 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-stone-800">User Profile</h2>

      <div className="relative w-24 h-24 mt-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700">Upload</span>
          </div>
        )}
      </div>

      <input type="file" accept="image/*" onChange={handleUpload} className="mt-4" />

      <p className="text-stone-800 mt-2">{user?.name || "User"}</p>
    </div>
  );
}
