import React, { useState, createContext } from "react";
import * as authRepository from "../services/firebaseClient.js";

export const UserContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    await authRepository.logout();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      {props.children}
    </UserContext.Provider>
  );
}
