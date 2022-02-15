import { useState } from "react";
import classes from "./Counter.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const clickHandler = (e) => {
    setCount((prevState) => ++prevState);
  };
  return (
    <div>
      <h2>Click counter</h2>
      <div className={classes.counter}>{count}</div>
      <button className={classes.button} onClick={clickHandler}>
        Click
      </button>
    </div>
  );
};
export default Counter;
