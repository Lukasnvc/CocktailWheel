import { createContext, useState, useEffect, Children } from "react";
import axios from "axios";
import { randomCocktails } from "../api/randomCocktail";

const CocktailContext = createContext();

const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(randomCocktails)
      .then((response) => setCocktails(response.data.drinks))
      .catch((error) => {
        console.error("Cocktails:", error);
      });
  }, []);

  return (
    <CocktailContext.Provider value={{ cocktails, isLoading }}>
      {children}
    </CocktailContext.Provider>
  );
};

export { CocktailContext, CocktailProvider };
