import styled from "styled-components";

// Optional Props

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
  // required
  bgColor: string;
  // optional
  borderColor?: string;
  // same: borderColor?: string | undefined;
  // 새로운 optional props를 추가
  text?: string;

}



function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return <Container 
  bgColor={bgColor} 
  // 만약borderColor가 undefined라면 borderColor는 bgColor와 같은 값을 가진다.
  // 이렇게 사용할 수 있는 이유: backgrounColor는 string이라는 걸 알고 있기 때문.
  borderColor={borderColor ?? bgColor}>
    {text}
    </Container>;
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
  sayHello({name:"nico", age:21})