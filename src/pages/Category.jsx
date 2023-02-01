import axios from "axios";
import { useState, useEffect } from 'react'
import { useParams , Link} from "react-router-dom";
import { byCategory} from '../api/byCategory'
import CocktailsList from "../components/CocktailsList";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import { size } from "../consts/mediaQuerys";

const Category = () => {
  let params = useParams()
  const { search } = useContext(SearchContext)
 
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
        .get(byCategory+params.name)
        .then((response) => setCategoryList(response.data.drinks))
        .catch((error) => {
          console.error("Category:", error);
        });
  }, [])
  let list = search !== null && search.length !== 25 ? search : categoryList
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

export default Category;

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
