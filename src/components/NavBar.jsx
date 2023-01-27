import styled from "styled-components";
import { GiDrinkMe } from 'react-icons/gi'
import { brownish } from "../consts/colors";
import axios from "axios";
import { categoryPicks } from '../api/categoryPicks'
import { useEffect, useState } from "react";

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
  console.log(alcoList)
  return (
    <Navbar>
      <Logo>
        <GiDrinkMe/>
      </Logo>
      <NavTabs>
        <Tab>Alcoholic</Tab>
        <Tab>Non Alcoholic</Tab>
        <Tab>
          <select name="alcohol">
            {alcoList && alcoList.map((pick) => (
              <Option key={pick.strCategory} value={pick.strCategory}>{pick.strCategory}</Option>
            ))}
          </select>
        </Tab>
      </NavTabs>
    </Navbar>
  );
}

export default NavBar;

const Navbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: 3.5rem;
  padding: 10px;
  margin-left: 20px;
  color: ${brownish};
  cursor: pointer;
`

const NavTabs = styled.div`
display: flex;
`
const Tab = styled.div`
  padding: 5px 10px;

  /* select {
  display: inline;  
  border: 0;
  width: auto;
  margin-left: 10px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-bottom: 2px solid $dark;
  color: $color--primary;
  transition: all .4s ease-in-out;
  
  &:hover {
    cursor: pointer;    
  }
} */
  

`

const Option = styled.option`
  border: 0;
    border-bottom: 1px solid blue;
    padding: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: red;
`