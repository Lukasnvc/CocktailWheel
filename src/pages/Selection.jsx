import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { alcoNonAlco } from "../api/alcoNonAlco";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import CocktailsList from "../components/CocktailsList";
import NavBar from "../components/NavBar";
import { size } from "../consts/mediaQuerys";
import {motion} from 'framer-motion'


const Selection = () => {
  let params = useParams()
  const { search } = useContext(SearchContext)
  
  const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
      axios
        .get(alcoNonAlco+params.type)
        .then((response) => setCocktails(response.data.drinks))
        .catch((error) => {
          console.error("Cocktails:", error);
        });
    }, []);

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

export default Selection;

const Grid = styled.div`
  text-decoration: none;
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
