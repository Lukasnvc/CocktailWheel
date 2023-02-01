import { CocktailContext } from "../../contexts/CocktailContext";
import { useContext, useState } from "react";
import CocktailsList from "../../components/CocktailsList";
import styled from "styled-components";
import { SearchContext } from "../../contexts/SearchContext";
import WheelSpin from "../../components/WheelSpin";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Home = () => {
  const { cocktails } = useContext(CocktailContext)
  const { search } = useContext(SearchContext)

 let list = search !== null && search.length !== 25 ? search : cocktails
 

  return (
    <>
    <NavBar/>
    <Grid>
      {list && list.map((item) => (
        <Slink to={'/recipe/'+item.idDrink} key={item.idDrink}>
          <CocktailsList  pic={item.strDrinkThumb} title={item.strDrink} />
          </Slink>
      ))} 
    </Grid>
    </>
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
const Slink = styled(Link)`
  text-decoration: none;
`