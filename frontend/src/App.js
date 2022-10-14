import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const liff = window.liff;
  //const liffid = "1657554488-4q7a7Olo";
  const [profile, setProfile] = useState({
    userId: "",
    displayName: "",
    statusMessage: "",
  });

  // useEffect(() => {
  //   const componentDidMount = async () => {
  //     await liff.init({ liffId: `${liffid}` }).catch((err) => {
  //       throw err;
  //     });
  //     if (liff.isLoggedIn()) {
  //       let getProfile = await liff.getProfile();
  //       profile = {
  //         userId: getProfile.userId,
  //         displayName: getProfile.displayName,
  //         statusMessage: getProfile.statusMessage,
  //       };
  //       // profile.userId = getProfile.userId;
  //       // profile.displayName = getProfile.displayName;
  //       // profile.statusMessage = getProfile.statusMessage;
  //     } else {
  //       liff.login();
  //     }
  //   };
  //   componentDidMount();
  // });

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
  },[liff,profile]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>userId:{profile.userId}</p>
          <p>displayName: {profile.displayName}</p>
          <p>statusMessage: {profile.statusMessage}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
