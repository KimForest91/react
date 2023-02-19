import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
/*   const iRinOnlyOnce = () => {
    console.log("I run only Once.");
  }; 
  useEffect(iRinOnlyOnce, []); */
/*   useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]); */
  useEffect(() => {
    console.log("I run only Once.");
  }, []);
  useEffect(() => {
      console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
 
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
