import styled from "styled-components";
import { GiDrinkMe } from 'react-icons/gi'
import { brownish, darkGreen } from "../consts/colors";
import axios from "axios";
import { categoryPicks } from '../api/categoryPicks'
import { useEffect, useState } from "react";
import Search from "./Search";

const NavBar = () => {
  const [alcoList, setAlcoList] = useState([])
  const Dropdown = ({ selected, setSelected }) => {
  }
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
      <Logo>
        <GiDrinkMe/>
      </Logo>
      <Search/>
      <NavTabs>
        <Tab>Alcoholic</Tab>
        <Tab>Non Alcoholic</Tab>
        <Tab>
          <select name="alcohol">
            <Option value={''}>Category</Option>
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
  cursor: pointer; 
  font-weight: 600;
  font-size: 1rem;
  color: ${brownish};
  text-transform: uppercase;

  select {
  font-size: 1rem;
  border: 0;
  width: auto;
  outline: none;
  transition: 300ms ease-in-out;
  &:hover {
    color: ${darkGreen};
    cursor: pointer; 
  }
}
&:hover {
    color: ${darkGreen};
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