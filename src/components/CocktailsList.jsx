import styled from 'styled-components'
import { pink, grey } from '../consts/colors'
import { size } from '../consts/mediaQuerys';

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
  position: relative;
  
  transition: 300ms ease-in-out;
  box-shadow: rgb(38, 57, 77) 0px 35px 45px -25px;
  cursor: pointer;
  img {
    width: 100%;
    border: 3px solid ${grey};
    border-radius: 10px;
    transition: 300ms ease-in-out;
  }
  h3 {
    position: absolute;
    font-size: 1rem;
    left: 3px;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: ${pink};
    background-color: RGBa(204, 214, 246, 0.6);
    text-transform: uppercase;
    transition: 300ms ease-in-out;
    @media (max-width: ${size.mobile}){
      font-size: 0.8rem;
    }
  }
  &:hover {
    img{
      border: 3px solid ${pink};
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    }

    h3{
      color: ${pink};
      text-shadow: 0 0 3px #fff, 0 0 7px #fff, 0 0 10px #e60073, 0 0 14px #e60073, 0 0 17px #e60073, 0 0 22px #e60073, 0 0 23px #e60073;
      transform: scale(1.02); 
    }
  }
`