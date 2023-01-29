import { CocktailContext } from "../../contexts/CocktailContext";
import { useContext } from "react";
import CocktailsList from "../../components/CocktailsList";
import styled from "styled-components";
import { SearchContext } from "../../contexts/SearchContext";

const Home = () => {
  const { cocktails } = useContext(CocktailContext)
  const { search } = useContext(SearchContext)
  let list = search ? search : cocktails;
  return (
    <Grid>
      { list && list.map((item) => (
    <CocktailsList key={item.idDrink} pic={item.strDrinkThumb} title={item.strDrink}/>
     ))} 
    </Grid>
  );
}

export default Home;

const Grid = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
`
