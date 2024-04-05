import styled from 'styled-components';

const Button = styled.button`

  position: relative;
  margin:10px;
  width: 11em;
  height: 3em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  font-family: "Varela", sans-serif;
  font-weight: 600;
  font-style: normal; 
  font-size: 18px;
  color: #5691f5;

  
  &:hover #rightArrow {
    background-color:rgb(216 115 78);
    left: -15%;
    color:#c969a3;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }
  &:hover{
    color:#c969a3;
    font-weight:700;
  }
  &:hover #leftArrow {
    background-color: rgb(216 115 78);
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  &:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  &:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: #27c39f;
  }
`;



export default function StyledButton({ name }) {
  return (
    <Button>
      {name}
    </Button>
  );
}