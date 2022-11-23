import { useState, useCallback, useEffect } from "react";
// let logoutTimer;
export const useAuth = () => {
  // const [token, setToken] = useState(null);
  // const [tokenExpirationDate, setTokenExpirationDate] = useState();

  // const [userId, setUserId] = useState(false);
  // const [position, setPosition] = useState(false);

  //useEffect run after the render cycle.

  // const login = useCallback((uid, token, expiration) => {
  //   setToken(token);
  //   setUserId(uid);
  //   const tokenExpirationDate =
  //     expiration || new Date(new Date().getTime() + 1000*60*60 );     //1 hour
  //     setTokenExpirationDate(tokenExpirationDate);
  //   localStorage.setItem(
  //     "userData",
  //     JSON.stringify({
  //       userId: uid,
  //       token: token,
  //       expiration: tokenExpirationDate.toISOString(),
  //     })
  //   );
  // }, []);

  // const logout = useCallback(() => {
  //   setToken(null);
  //   setTokenExpirationDate(null);
  //   setUserId(null);
  //   localStorage.removeItem("userData");
  // }, []);

  // useEffect(()=>{
  //   if(token && tokenExpirationDate){
  //     const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
  //     logoutTimer = setTimeout(logout, remainingTime);
  //   } else {
  //     clearTimeout(logoutTimer);
  //   }
  // },[token,logout,tokenExpirationDate]);
  const liff = window.liff;

  const [userId, setuserId] = useState(false)
  const [position, setposition] = useState(false)
  const [displayName, setdisplayName] = useState(false)
  const [statusMessage, setstatusMessage] = useState(false)
  const [email, setemail] = useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      const userLineProfile = await liff.getProfile();
      setuserId(userLineProfile.userId);
      setdisplayName(userLineProfile.displayName);
      setstatusMessage(userLineProfile.statusMessage);
      setemail(liff.getDecodedIDToken().email);
      
    };
    getUserProfile();
  }, []);



  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("userData")); //userId and position
  //   if (storedData && storedData.userId && storedData.position) {
  //     console.log(storedData.userId);
  //     console.log(storedData.position);
  //     setUserId(storedData.userId);
  //     setPosition(storedData.position);
  //   } 
  // }, []);

  return { userId, position, displayName, statusMessage, email};
};
