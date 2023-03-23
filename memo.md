# TypeScript

- javascript를 기반으로 한 프로그래밍 언어.
- stongly-typed 언어 : 프로그래밍 언어가 작동하기 전에 `type` 을 확인한다는 것.

```js
const plus = (a, b) => a + b;
plus(2,2)     // 4

plus(2, "hi")  //'2hi'

////////////
// https://www.typescriptlang.org/

const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor",
}

console.log(user.name)    //undefined -> typescript가 이걸 해결해줘
```

```js
const plus = (a:number, b:number) => a + b;
plus(1,1)
plus("a",1)
```

## `@types` 

- 아주 큰Github repository
- 모든 유명한 npm 라이브러리를 가지고 있는 저장소


# Typing the Props

- typeScript를 사용하는 이유: 코드가 실행되기 `전`에 오류를 확인하기 위해.
- interface 는 object가 어떤식으로 보일지 설명해주는 것.

<!-- App.tsx -->

```js
import Circle from "./Circle";


function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />

    </div>
  );
}

export default App; 
```

<!-- Circle.tsx -->

```js
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
```

# Optional Props 

```js
interface CircleProps {
  // required
  bgColor: string;
  // optional
  borderColor?: string;
}
```

```js
function App() {
  return (
    <div>
      <Circle borderColor="pink" bgColor="teal" />
      <Circle bgColor="tomato" />

    </div>
  );
}

export default App; s
```