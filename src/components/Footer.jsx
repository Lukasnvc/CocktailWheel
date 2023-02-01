import styled from "styled-components";
import {FaGithub} from 'react-icons/fa'
import { grey, pink } from "../consts/colors";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
      <Parag>2023 made by Lukas<Slink to='https://github.com/Lukasnvc/The_Cocktail-.git'><FaGithub/></Slink></Parag>
  );
}

export default Footer;

const Slink = styled(Link)`
  text-decoration: none;
  color: ${grey};
`

const Parag = styled.p`
  color: ${grey};
  text-align: center;
  font-size: 0.7rem;
  margin-bottom: 5px;
  svg {
    margin-left: 10px;
    font-size: 1.3rem;
    &:hover {
      color: ${pink};
      cursor: pointer;
      transform: scale(1.1); 
    }
  }
`