import styled from "styled-components";
import { GiDrinkMe } from 'react-icons/gi'
import { pink } from "../consts/colors";
import axios from "axios";
import { categoryPicks } from '../api/categoryPicks'
import { useEffect, useState, useContext } from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import NavDropDown from "./NavDropDown";
import { size } from "../consts/mediaQuerys";
import { SpinContext } from "../contexts/SpinWheel";


const NavBar = ({ show}) => {
  const [alcoList, setAlcoList] = useState([])
  const {spinWheel, toggleSpin} = useContext(SpinContext)
  useEffect(() => {
    axios
      .get(categoryPicks)
      .then((response) => setAlcoList(response.data.drinks))
      .catch((error) => {
      console.error('Categories:', error)
    })
  }, [])
  return (
    <Navbar>
     <Slink to={'/home'}>
      <Logo>
        <GiDrinkMe />
        <span>Cocktail wheel</span>
      </Logo>
     </Slink>
     {show !== 'none' && <Search />}
     <NavTabs>
      <Tab onClick={toggleSpin}><span>Spin cocktail wheel</span></Tab>
      <Slink to={'/Alcoholic'}>
        <Tab name='Alcoholic'>Alcoholic</Tab>
      </Slink>
      <Slink to={'/Non_alcoholic'}>
        <Tab name='Non_alcoholic'>Non Alcoholic</Tab>
      </Slink>
      
        <NavDropDown array={alcoList}/>
 
    </NavTabs>
    </Navbar>
  );
}

export default NavBar;

const Slink = styled(NavLink)`
  text-decoration: none;
`

const Navbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-direction: column;
`

const Logo = styled.div`
  font-size: 3rem;
  padding-top: 5px;
  margin-bottom: 5px;
  color: ${pink};
  cursor: pointer;
  span{
    font-size: 1.3rem;
    font-family: 'Dancing Script', cursive;
  }
  &:hover {
  text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
    transform: scale(1.1); 
  }
`

const NavTabs = styled.div`
display: flex;
@media (max-width: ${size.mobile}) {
    flex-direction: column;
  }

`
const Tab = styled.div`
  transition: 300ms ease-in-out;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer; 
  font-weight: 600;
  font-size: 0.8rem;
  color: ${pink};
  text-transform: uppercase;
  @media (max-width: ${size.tablet}) {
    font-size: 0.7rem;
  }
&:hover {
  text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
    transform: scale(1.1); 
  }

`