import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const liff = window.liff;
  //const liffid = "1657554488-4q7a7Olo";
  const [profile, setProfile] = useState({
    userId: "",
    displayName: "",
    statusMessage: "",
  });
  useEffect(() => {
    const getUserProfile = async () => {
      const userLineProfile = await liff.getProfile();
      setProfile({
        ...profile,
        userId: userLineProfile.userId,
        displayName: userLineProfile.displayName,
        statusMessage: userLineProfile.statusMessage,
      });
    };
    getUserProfile();
  }, [liff, profile]);
  return (
    <div>
      Home Jaaaaa
      <ul>
        <li>
          <NavLink to="/order">ALL USERS</NavLink>
        </li>
      </ul>
      <div>
        <p>userId:{profile.userId}</p>
        <p>displayName: {profile.displayName}</p>
        <p>statusMessage: {profile.statusMessage}</p>
      </div>
    </div>
  );
};

export default Home;
