import React from "react";
import { createContext, useState } from "react";

export const DateSearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [queryDate, setQueryDate] = useState("");

  return (
    <DateSearchContext.Provider value={{ queryDate, setQueryDate }}>
      {children}
    </DateSearchContext.Provider>
  );
};

export default SearchContextProvider;
