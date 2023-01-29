import styled from "styled-components";
import { brownish, lightBlue } from "../consts/colors";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";

const Search = () => {
  const {input, setInput} = useContext(SearchContext)
  return (
    <SearchContainer>
      <SearchField name="search" value={input} onChange={(e) => setInput(e.target.value)} />
    </SearchContainer>

      

  );
}

export default Search;

const SearchField = styled.input`
  background-color: ${lightBlue};
  border: none;
  border-bottom: 2px solid ${brownish};
  color: ${brownish};
  font-weight: 600;
  &:focus {
    outline: none;
  }
`

const SearchContainer = styled.div`
  padding: 5px 15px;
  background-color: ${lightBlue};
  border-radius: 20px;
  opacity: 40%;
`
