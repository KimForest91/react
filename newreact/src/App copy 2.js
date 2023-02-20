import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";
function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn () {
    console.log("create");
    return byFn;
  }
  useEffect(hiFn, []);

/*   useEffect(() => {
    console.log("hi :)");
    return function() {
      console.log("bye");
    }
  }, []) */

/*   useEffect(() => {
    console.log("create! :)");
    return () => console.log("destroyed :("); //clean up function
  }, [])  */
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ?  "Hide" : "show"}</button>
    </div>
  );
}

export default App;
