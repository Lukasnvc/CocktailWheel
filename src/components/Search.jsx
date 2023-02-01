import styled from "styled-components";
import { brownish, dark, pink  } from "../consts/colors";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  const {input, setInput} = useContext(SearchContext)
  return (
    <SearchContainer>
      <SearchField name="search" value={input} onChange={(e) => setInput(e.target.value)} />
      <FaSearch/>
      </SearchContainer>
  );
}

export default Search;

const SearchField = styled.input`
  background-color: ${dark};
  border: none;
  font-weight: 600;
  border-bottom: 2px solid ${pink};
  color: ${pink};
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  svg{
    position: absolute;
    bottom: 5px;
    right: -5px;
    font-size: 1rem;
    color: ${pink};
    padding: 4.1px;
    }
    &:hover {
      svg {
        transform: scale(1.3); 
      }
    
  }
`
