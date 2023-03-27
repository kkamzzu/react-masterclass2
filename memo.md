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

export default App;
```

<!-- Circle.tsx -->
```js
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
```


# State

```js
// State 

function Circle({ bgColor, borderColor }: CircleProps) {

                                // 초기값 설정 (number or string)
                                // typeScript가 타입을 추론함 
                                // 초기값이 없으면 undefined
  const [value, setValue] = useState<number | string>(0);
  setValue(2)
  setValue("hello")
  // setValue(true)  => error
  return <Container 
  bgColor={bgColor} borderColor={borderColor ?? bgColor}>
    </Container>;
}

export default Circle;
```

# Forms

```js
const {
currentTarget: {value, tagName, width, id}
} = event;
```
<!-- same -->
```js
const value = event.currentTarget.value;
const tagName = event.currentTarget.tagName;
const width = event.currentTarget.width;
const id = event.currentTarget.id;
```

# Themes

# Home part one

<!-- link -->
```js
 <CoinsList>
        {coins.map(coin =>
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>
              {coin.name} &rarr;</Link>
          </Coin>)}
      </CoinsList>
```


# React Query
- 우리가 우리 스스로 실행하고 있었던 로직들을 축약해줌

```js
 const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false)
    })();
  }, []);
```
- 이런걸 자동으로 해줌.

- React Query를 사용하기 위해서는 fetcher함수가 필요해요
- API와 관련된 것들은 component들과 멀리 떨어트려 놓음

# fetcher 

- fetcher함수는 꼭 fetch promise를 return 해줘야함

# useQuery hook
- 2개의 argument를 필요로 함 (1.queryKey 2.fetcher function)
```js
useQuery("allCoins", fetchCoins)
```

# Devtools