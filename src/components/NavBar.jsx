import styled from "styled-components";
import { GiDrinkMe } from 'react-icons/gi'
import { dark, pink } from "../consts/colors";
import axios from "axios";
import { categoryPicks } from '../api/categoryPicks'
import { useEffect, useState } from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  const [alcoList, setAlcoList] = useState([])

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
     <Slink to={'/'}>
      <Logo>
        <GiDrinkMe />
        <span>Cocktail wheel</span>
        </Logo>
      </Slink>
      <Search/>
      <NavTabs>
        <Tab><span>Spin cocktail wheel</span></Tab>
        <Slink to={'/Alcoholic'}>
          <Tab name='Alcoholic'>Alcoholic</Tab>
        </Slink>
        <Slink to={'Non_alcoholic'}>
          <Tab name='Non_alcoholic'>Non Alcoholic</Tab>
          </Slink>
        <Tab>
          <Select name="alcohol">Select</Select>
          <SelectTiles>
            {alcoList && alcoList.map((pick) => (
              <Slink to={'/'+pick.strCategory} key={pick.strCategory}>{pick.strCategory}</Slink>
            ))}
            </SelectTiles>
         
        </Tab>
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
`

const Logo = styled.div`
  font-size: 3rem;
  padding-top: 5px;
  margin-left: 20px;
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

  select {
    color: ${pink};
    font-family: 'Orbitron', sans-serif;
    background-color: ${dark};
  font-size: 1rem;
  border: 0;
  width: auto;
  outline: none;
  transition: 300ms ease-in-out;
  &:hover {
    transform: scale(1.1); 
    cursor: pointer; 
  }
}
&:hover {
  text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
    transform: scale(1.1); 
  }

`

const Option = styled.option`
  border: 0;
    border-bottom: 1px solid blue;
    padding: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: red;
`

const SelectTiles  = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`
const Select = styled.div`
  position: relative;
`