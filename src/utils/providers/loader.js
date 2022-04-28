import React, { createContext, useState } from "react";
import { Loader } from "../../components/atoms";

const LoaderContext = createContext();

const LoaderContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const hideLoader = () => setLoading(false);
  const showLoader = () => setLoading(true);

  return (
    <LoaderContext.Provider value={{ hideLoader, showLoader }}>
      {children}
      {loading && <Loader />}
    </LoaderContext.Provider>
  );
};

export { LoaderContext };
export default LoaderContextProvider;
