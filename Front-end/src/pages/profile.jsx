import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const response = await axios.get("http://localhost:5000/api/users/profile", config);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h1>Welcome, {profile.name}!</h1>
      <p>Email: {profile.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Profile;
