import React, { useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isLoginPending: boolean;
  loginError: Error | null;
  token: string | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null,
  token: null,
};

const fetchLogin = (
  identifier: string,
  password: string,
  callback: (argument: { jwt: string } | Error | null) => void
) => {
  const requestOptions = {
    method: "POST",
    headers: new Headers([["Content-Type", "application/json"]]),
    body: JSON.stringify({
      identifier,
      password,
    }),
  };
  fetch("http://localhost:1337/api/auth/local", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if ("jwt" in result) {
        callback(result);
      } else {
        callback(new Error(result.error.message));
      }
    })
    .catch((error) => {
      callback(error);
    });
};

export const AuthContext = React.createContext<{
  state: AuthState;
  login: (email: string, password: string) => void;
  logout: () => void;
}>({
  state: initialState,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setLoginPending = (isLoginPending: boolean) =>
    setState({ ...state, isLoginPending });
  const setLoginSuccess = (isLoggedIn: boolean) =>
    setState({ ...state, isLoggedIn });
  const setLoginError = (loginError: Error | null) =>
    setState({ ...state, loginError });
  const setToken = (token: string | null) => setState({ ...state, token });

  const login = (email: string, password: string) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    fetchLogin(email, password, (userData) => {
      setLoginPending(false);
      if (userData && "jwt" in userData) {
        setLoginSuccess(true);
        setLoginError(null);
        setToken(userData.jwt);
      } else {
        setLoginError(userData);
      }
    });
  };

  const logout = () => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
