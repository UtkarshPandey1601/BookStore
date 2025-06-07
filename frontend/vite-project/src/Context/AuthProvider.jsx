import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const getInitialAuthUser = () => {
    try {
      const storedUser = localStorage.getItem("Users");
      if (storedUser && storedUser !== "undefined") {
        return JSON.parse(storedUser);
      }
      return null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      localStorage.removeItem("Users");
      return null;
    }
  };

  const [authUser, setAuthUser] = useState(getInitialAuthUser());

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
