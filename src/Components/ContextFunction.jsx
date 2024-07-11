import React, { createContext } from "react";

export const AuthContext = createContext();

const ContextFunction = ({ children }) => {
  const data = "testing data from parent context comp";

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default ContextFunction;
