const generateRandomLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const randomCocktailsGet = `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${generateRandomLetter()}`;
