import styled from "styled-components";
import { brownish, pearl, turque, dark, grey } from "../consts/colors";
import wheelSpin from '../consts/pictures/wheel-spin.png'

const WheelSpin = () => {
  return (
    <WheelContainer>
      <h1>Mystery cocktail</h1>
      <InnerFlex>
        <div>   <Card></Card>
        <SpinBtn>SPIN THE WHEEL</SpinBtn></div>
     
        <img src={wheelSpin} alt="spin wheel" />
      </InnerFlex>
      
       
        
    </WheelContainer>
  );
}

export default WheelSpin;

const WheelContainer = styled.div`
  margin: 40px 0;
  background-color: ${grey};
  border-bottom-left-radius: 65%;
  h1 {  
    margin: 0 30px;
    padding-top: 20px;
    font-size: 3rem;

    width: fit-content;
  }
  img {
    
  }
`

const InnerFlex = styled.div`
display: flex;
justify-content: space-between;
margin-left: 40%;

`
const SpinBtn = styled.button`
  padding: 8px 25px;

  font-size: 1.2rem;
  border-radius: 5px;
  margin: 50px 0;
`

const Card = styled.div`
  height: 400px;
  width: 300px;
  background-color: red;
`