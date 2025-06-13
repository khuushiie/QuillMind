import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setName(res.data.name);
        setEmail(res.data.email);
        setBio(res.data.bio || "");
      } catch (err) {
        console.error("Failed to load profile");
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await axios.put(
        "http://localhost:5000/api/auth/update",
        { name, email, bio },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMessage("✅ Profile updated successfully!");
      localStorage.setItem("user", JSON.stringify({ name, email, bio }));

      setTimeout(() => {
        window.location.reload(); // quick fix to re-render name/email in ProfilePage
      }, 1000);
    } catch (err) {
      setMessage("❌ Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-indigo-600">Update Your Info</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
        <textarea
          rows="3"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-2"
          placeholder="Tell us something about you"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl shadow-md"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>

      {message && (
        <p className="text-sm mt-2 text-indigo-600 font-medium">{message}</p>
      )}
    </div>
  );
}

