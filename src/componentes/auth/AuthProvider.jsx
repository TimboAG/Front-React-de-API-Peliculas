import React from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUSer] = useState({});
  return (
    <>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
          user,
          setUSer,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
