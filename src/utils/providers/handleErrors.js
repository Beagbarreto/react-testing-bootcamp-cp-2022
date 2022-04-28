import React, { createContext, useState } from "react";

export const HandleErrorsContext = createContext();

export const HandleErrosContextProvider = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    <HandleErrorsContext.Provider value={{ error, setError }}>
      {children}
      {error !== null
        <ErrorModal />
      }
    </HandleErrorsContext.Provider>
  );
};
