import { CocktailContext } from "../../contexts/CocktailContext";
import { useContext } from "react";
import CocktailsList from "../../components/CocktailsList";
import styled from "styled-components";

const Home = () => {
  const { cocktails, isLoading } = useContext(CocktailContext)

  return (
    <Grid>
      { cocktails && cocktails.map((item) => (
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
