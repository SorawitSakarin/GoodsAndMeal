import React, { Suspense, lazy, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";
const Home = lazy(() => import("./shared/page/Home"));
const Order = lazy(() => import("./order/page/OrderNew"));
const QrCodeReader = lazy(() => import("./order/page/QrCodeReader"));
const ALRegistration = lazy(() => import("./registration/ALRegistration"));
const LMRegistration = lazy(() => import("./registration/LMRegistration"));

const AppRouter = () => {
  const { userId, position, displayName, statusMessage, email} = useAuth();


  return (
    <Router>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!position,
          position: position,
          userId: userId,
          displayName: displayName,
          statusMessage: statusMessage,
          email:email
        }}
      >
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/qrcodeReader" element={<QrCodeReader />} />
              <Route path="/arealeaderregistration" element={<ALRegistration />} />
              <Route path="/riderregistration" element={<LMRegistration />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </AuthContext.Provider>
    </Router>
  );
};
export default AppRouter;

