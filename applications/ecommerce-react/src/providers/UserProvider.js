import React, { useState, useEffect, createContext } from "react";

import * as authRepository from "../services/firebaseClient.js";
import * as userRepository from "../services/userRepository.js";

export const UserContext = createContext();

function buildUser(userData) {
  return {
    id: userData.id,
    uid: userData.uid,
    username: userData.username,
    email: userData.email,
  };
}

export default function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const attemptLoadUser = async () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) return;

      setToken(storedToken);
    };
    attemptLoadUser();
  }, []);

  const createUser = async (formValues) => {
    const authResponse = await authRepository.createUserAccount(
      formValues.email,
      formValues.password
    );

    const response = await userRepository.createUser({
      ...formValues,
      uid: authResponse.user.uid,
    });
    const userData = response.data;
    const user = buildUser(userData);

    setUser(user);
  };

  const loginUser = async (formValues) => {
    const authResponse = await authRepository.loginToAccount(
      formValues.email,
      formValues.password
    );

    const token = await authRepository.getToken();
    localStorage.setItem("token", token);
    setToken(token);

    const response = await userRepository.loginUser({
      uid: authResponse.user.uid,
    });
    const userData = response.data[0];
    const user = buildUser(userData);

    setUser(user);
  };

  const handleLogout = async () => {
    await authRepository.logout();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, createUser, loginUser, handleLogout }}>
      {props.children}
    </UserContext.Provider>
  );
}
