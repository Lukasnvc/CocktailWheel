import styled from "styled-components";
import { brownish, darkBlue, lightBlue, lightGreen } from "../consts/colors";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import {GrFormSearch} from 'react-icons/gr'

const Search = () => {
  const {input, setInput} = useContext(SearchContext)
  return (
    <SearchContainer>
      <SearchField name="search" value={input} onChange={(e) => setInput(e.target.value)} />
      <GrFormSearch/>
    </SearchContainer>

      

  );
}

export default Search;

const SearchField = styled.input`
  background-color: ${lightBlue};
  border: none;
  color: ${brownish};
  font-weight: 600;
  &:focus {
    outline: none;
  }
`

const SearchContainer = styled.div`
  position: relative;
  padding: 7px 15px;
  background-color: ${lightBlue};
  border-radius: 20px;
  opacity: 70%;
  svg{
    position: absolute;
    right: 0.3px;
    bottom: 0px;
    font-size: 1.5rem;
    background-color: ${darkBlue};
    padding: 4.1px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    }
`
