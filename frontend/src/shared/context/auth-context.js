import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  position: null,
  displayName: null,
  statusMessage: null,
  email: null,
});
