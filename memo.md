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
