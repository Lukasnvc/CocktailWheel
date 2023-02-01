import { SpinContext } from "../contexts/SpinWheel";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link} from "react-router-dom";
import axios from "axios";
import {randomPick} from '../api/spinWheel';
import SpinLady from '../consts/pictures/wheel-spin.png';
import { pink, dark, lightGrey, grey } from '../consts/colors'
import {size} from '../consts/mediaQuerys'

const Modal = () => {
  const { spinWheel, toggleSpin } = useContext(SpinContext);
  const [cocktail, setCocktail] = useState([])

  useEffect(() => {
    axios
    .get(randomPick)
    .then((response) => setCocktail(response.data.drinks))
    .catch((error) => {
      console.error("Wheel:", error);
    })
  },[spinWheel])
  
  if(!spinWheel) return null
  return (
    <Overlay onClick={toggleSpin}>
      <ModalContiner onClick={(e) => {
        e.stopPropagation()
      }}>
        <ModalLeft>
          <Slink onClick={toggleSpin} to={'/recipe/'+ cocktail[0].idDrink}>
          <img src={cocktail[0].strDrinkThumb} alt={cocktail[0].strDrink} />
            <h2>{cocktail[0].strDrink}</h2>
            </Slink>
        </ModalLeft>
        <ModalRight>
          <Close onClick={toggleSpin}>x</Close>
          <h2>Cocktail Wheel</h2>
          <img src={SpinLady} alt="" />
        </ModalRight>

      </ModalContiner>
    </Overlay>
  );
}

export default Modal;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${grey};
  border: 1px solid ${dark};
  color: ${dark};
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    border: 1px solid ${pink};
    color: ${pink};
  }
`

const Slink = styled(Link)`
  text-decoration: none;
`

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
`
const ModalContiner = styled.div`
  max-width: 700px;
  border-radius: 20px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  background-color: ${dark};
  box-shadow: 0px 0px 18px 0px rgba(0,0,0,0,0.75);


  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    top: 0;
    left: 0;
    transform: none;
    width: 70vw;
    margin: 60px;
  }
`

const ModalLeft = styled.div`
  position: relative;
  h2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: ${pink};
    background-color: RGBa(204, 214, 246, 0.6);
    text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
  }
    img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    border-top-left-radius : 20px;
    border-bottom-left-radius : 20px;
    @media (max-width: ${size.tablet}) {
      border-top-right-radius : 20px;
      border-top-left-radius : 20px;
    }
  }
`

const ModalRight = styled.div`
position: relative;
width: 100%;  
background-color: ${dark};
border-top-right-radius : 20px;
  border-bottom-right-radius : 20px;
img{
  width: 100%;

  @media (max-width: ${size.tablet}) {
      border-bottom-right-radius : 20px;
      border-bottom-left-radius : 20px;
    }
}
h2{
  margin: 0;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  color: ${pink};
  font-size: 3rem;
  text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
}
`

