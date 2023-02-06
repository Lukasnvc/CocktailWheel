import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { searchName } from "../api/searchName";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(searchName + input)
      .then((response) => setSearch(response.data.drinks))
      .catch((error) => {
        console.error("Search:", error);
      });
  }, [input]);
  return (
    <SearchContext.Provider value={{ search, setInput, input }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
