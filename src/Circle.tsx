import styled from "styled-components";


interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}


      //typeScript는 CircleProps 안에 bgColor가 있다는 것을 암.
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

// 이제 어디서든 sayHello function을 쓸 수 있음.
const sayHello = (playerObj: PlayerShape) => 
  `Hello ${playerObj.name} u are ${playerObj.age} years old.`;

  sayHello({name:"kkamzzu", age:21})
  sayHello({name:"kka", age:21})