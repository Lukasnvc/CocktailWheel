import styled from 'styled-components'
import { pink, grey, lightGrey } from '../consts/colors'

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
  background-color: ${grey};
  transition: 300ms ease-in-out;
  box-shadow: rgb(38, 57, 77) 0px 35px 45px -25px;
  cursor: pointer;
  border-bottom-right-radius: 30px;
  img {
    width: 100%;
  }
  h3 {
    margin: 0;
    padding-bottom: 4px;
    text-align: center;
    color: ${lightGrey};
    opacity: 70%;
    text-transform: uppercase;
    transition: 300ms ease-in-out;
  }
  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    color: ${pink};

    h3{
      color: ${pink};
      text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
    transform: scale(1.1); 
    }
  }
`