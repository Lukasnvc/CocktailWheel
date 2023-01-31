import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { alcoNonAlco } from "../api/alcoNonAlco";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import CocktailsList from "../components/CocktailsList";


const Selection = () => {
  let params = useParams()
  const { search } = useContext(SearchContext)
  console.log(params)
  
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
<Grid>
      {list && list.map((item) => (
        <Slink to={'/recipe/'+item.idDrink} key={item.idDrink}>
          <CocktailsList  pic={item.strDrinkThumb} title={item.strDrink} />
          </Slink>
     ))} 
      </Grid>
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
`
const Slink = styled(Link)`
  text-decoration: none;
`
