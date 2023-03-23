import { useState } from "react";

// Forms
function App02 () {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  // 일종의 패턴, 하면 익숙해짐
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
  <div>
    <form onSubmit={onSubmit}>
      <input 
        value={value} 
        onChange={onChange} 
        type="text" 
        placeholder="username" />
      <button>Log in</button>
    </form>
  </div>
  );
}

export default App02;