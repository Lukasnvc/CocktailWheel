import styled from 'styled-components'
import {darkBlue, lightBlue, lightGreen, darkGreen} from '../consts/colors'

const CocktailsList = ({pic, title}) => {
  return (
    <Card>
      <img src={pic} alt={title} />
      <h3>{title}</h3>
    </Card>
  );
}

export default CocktailsList;

const Card = styled.div`
  background-color: ${darkBlue};
  padding: 0px 0px;
  border-radius: 30px;
  transition: 300ms ease-in-out;
  box-shadow: rgb(38, 57, 77) 0px 35px 45px -25px;
  cursor: pointer;
  img {
    width: 100%;
  }
  h3 {
    padding: 0;
    margin: 10px;
    text-align: center;
    color: ${lightGreen};
    text-transform: uppercase;
  }
  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background-color: ${lightBlue};
    h3{
      color: ${darkGreen};
    }
  }
`