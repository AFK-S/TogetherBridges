import React, { useState, createContext } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
