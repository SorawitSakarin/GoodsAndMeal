import React, { Suspense, lazy, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//   import MainNavigation from "./shared/components/Navigation/MainNavigation";
//   import { AuthContext } from "./shared/context/auth-context";
const Home = lazy(() => import("./shared/page/Home"));
const Order = lazy(() => import("./order/page/Order"));

const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userId, setUserId] = useState(false);

//   const login = useCallback((uid) => {
//     setIsLoggedIn(true);
//     setUserId(uid);
//   }, []);

//   const logout = useCallback(() => {
//     setIsLoggedIn(false);
//     setUserId(null);
//   }, []);

  // let routes;

  // if (!isLoggedIn){   //Status: Log out  >> need Log in
  //   routes = (
  //       <Routes>
  //           <Route path="/" element={<Home />} />
  //             <Route path="/:userId/places" element={<Places />} />
  //             <Route path="/user" element={<Users />} />
  //             <Route path="/auth" element={<Auth />} />
  //             <Route path="/aboutus" element={<AboutUs />} />
  //             <Route path="/print" element={<Print />} />
  //             <Route path="*" element={<Navigate to="/auth" replace />} />
  //       </Routes>
  //   );
  // } else {  // Status: Log in
  //   routes = (
  //       <Routes>
  //           <Route path="/" element={<Home />} />
  //             <Route path="/:userId/places" element={<Places />} />
  //             <Route path="/user" element={<Users />} />
  //             <Route path="/aboutus" element={<AboutUs />} />
  //             <Route path="/places/new" element={<NewPlaces />} />
  //             <Route path="/places/:placeId" element={<UpdatePlace />} />
  //             <Route path="*" element={<Navigate to="/" replace />} />
  //       </Routes>
  //   );
  // }

  return (
    <Router>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};
export default AppRouter;

//   return (
//     <Router>
//       <AuthContext.Provider
//         value={{ isLoggedIn: isLoggedIn,userId : userId, login: login, logout: logout }}
//       >
//         <MainNavigation />
//         <main>
//           <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//               <Route path="/:userId/places" element={<Places />} />
//               <Route path="/user" element={<Users />} />
//               <Route path="/auth" element={<Auth />} />
//               <Route path="/aboutus" element={<AboutUs />} />
//               <Route path="/print" element={<Print />} />
//               <Route path="*" element={<Navigate to="/auth" replace />} />
//         </Routes>
//           </Suspense>
//         </main>
//       </AuthContext.Provider>
//     </Router>
//   );
// };
