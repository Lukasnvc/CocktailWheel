import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../api/getById";
import styled from "styled-components";
import { grey, pink, lightGrey, dark } from "../consts/colors";
import NavBar from "../components/NavBar";
import { size } from "../consts/mediaQuerys";
import {motion} from 'framer-motion'


const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('ingredients')
  
  useEffect(() => {
    axios
      .get(getById+params.id)
      .then((response) => (setDetails(response.data.drinks[0])))
      .catch((error) => {
        console.error("Recipe:", error);
      })
  },[]);
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      <NavBar show="none"/>
        <DetailWrapper>
        <LeftSide>
          <h1>{details.strDrink}</h1>
          <img src={details.strDrinkThumb} alt={details.strDrink} />
        </LeftSide>
        <Info>
          <BtnWrapper>
            <RecipeBtn className={activeTab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</RecipeBtn>
            <RecipeBtn className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</RecipeBtn>
          </BtnWrapper>
            {activeTab === 'instructions' && <div>
              <h3>{details.strAlcoholic}</h3>
              <h3>Glass: {details.strGlass}</h3>
              <h3>{details.strInstructions}</h3>
            </div>}
          {activeTab === 'ingredients' && <ul>
            {details.strIngredient1 != null && <li>{details.strMeasure1} - {details.strIngredient1}</li>}
              {details.strIngredient2 != null && <li>{details.strMeasure2} - {details.strIngredient2}</li>}
              {details.strIngredient3 != null && <li>{details.strMeasure3} - {details.strIngredient3}</li>}
              {details.strIngredient4 != null && <li>{details.strMeasure4} - {details.strIngredient4}</li>}
              {details.strIngredient5 != null && <li>{details.strMeasure5} - {details.strIngredient5}</li>}
              {details.strIngredient6 != null && <li>{details.strMeasure6} - {details.strIngredient6}</li>}
              {details.strIngredient7 != null && <li>{details.strMeasure7} - {details.strIngredient7}</li>}
              {details.strIngredient8 != null && <li>{details.strMeasure8} - {details.strIngredient8}</li>}
              {details.strIngredient9 != null && <li>{details.strMeasure9} - {details.strIngredient9}</li>}
              {details.strIngredient10 != null && <li>{details.strMeasure10} - {details.strIngredient10}</li>}
          </ul>}
          
        </Info>
      </DetailWrapper>
      </motion.div>
  );
}

export default Recipe;

const DetailWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 30%;
  margin-top: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    margin-top: 1rem;
  }

  color: ${lightGrey};
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: ${lightGrey};
    border-color: ${lightGrey};
    background: ${grey};
  }
  
`;

const LeftSide = styled.div`
  img {
    width: 100%;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  }
  h1 {
    margin-bottom: 1.5rem;
    color: ${pink};
    text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const RecipeBtn = styled.button`
  padding: 1rem 2rem;
  color: ${pink};
  background: ${dark};
  border: 2px solid ${pink};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  width: 400px;
  height: 450px;
  @media (max-width: ${size.mobile}){
    width: 320px;
    height: fit-content;
  }
`;