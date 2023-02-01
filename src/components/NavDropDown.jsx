import styled from "styled-components";
import { lightGrey, pink, dark } from "../consts/colors";
import { NavLink } from "react-router-dom";

const NavDropDown = ({array}) => {
  return (
    <DropDownContainer>
      <DropDownTitle>Category</DropDownTitle>
      <List>
        {array.map((item) => (
          !item.strCategory.includes('/') && <Slink key={item.strCategory} to={`/category/${item.strCategory}`}>
          <li>{item.strCategory}</li>
          </Slink> 
        ))}
        </List>
    </DropDownContainer>
  );
}

export default NavDropDown;

const Slink = styled(NavLink)`
  text-decoration: none;
  z-index: 99;
  color: ${pink};
`

const DropDownContainer = styled.div`
  position: relative;
  cursor: pointer; 
  color: ${pink};
  text-transform: uppercase;
  transition: 400ms ease-in-out;
  &:hover {
    ul {
  display: block;
    }
  }
`
const DropDownTitle = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  transition: 300ms ease-in-out;
  padding: 5px 10px;
  margin: 0 5px;
  &:hover {
  text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
    transform: scale(1.1); 
  }
`

const List = styled.ul`
  transition: 400ms ease-in-out;
  width: 100px;
  list-style: none;
  position: absolute;
  top: 10px;
  display: none;
  padding: 2px;
  text-align: center;
  background-color: rgba(204,214,246, 0.7);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: 10px;
  z-index: 99;
  li{
    
    font-size: 0.7rem;
    padding: 5px;
    &:hover {
      text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
    }
  }
`
