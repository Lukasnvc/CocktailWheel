import { CocktailContext } from "../../contexts/CocktailContext";
import { useContext } from "react";
import CocktailsList from "../../components/CocktailsList";
import styled from "styled-components";
import { SearchContext } from "../../contexts/SearchContext";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { size } from "../../consts/mediaQuerys";
import {motion} from 'framer-motion'

const Home = () => {
  const { cocktails } = useContext(CocktailContext)
  const { search } = useContext(SearchContext)

 let list = search !== null && search.length !== 25 ? search : cocktails
 

  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
    <NavBar/>
    <Grid>
      {list && list.map((item) => (
        <Slink to={'/recipe/'+item.idDrink} key={item.idDrink}>
          <CocktailsList  pic={item.strDrinkThumb} title={item.strDrink} />
        </Slink>
      ))} 
    </Grid>
    </motion.div>
  );
}

export default Home;

const Grid = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  @media (max-width: ${size.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`
const Slink = styled(Link)`
  text-decoration: none;
`