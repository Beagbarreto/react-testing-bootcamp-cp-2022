import { createContext, useState } from "react";
import moment from 'moment';

export const DateSearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const currentDate = moment(new Date()).format("YYYY-MM-DD")
  const [queryDate, setQueryDate] = useState(currentDate);

  return (
    <DateSearchContext.Provider value={{ queryDate, setQueryDate }}>
      {children}
    </DateSearchContext.Provider>
  );
};

export default SearchContextProvider;
