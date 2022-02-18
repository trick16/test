import Button from "./Button";
import { useState } from "react";
import classes from "./CounterButton.module.css";

const CounterButton = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const onClickHandler = (e) => {
    setCount((prevCount) => ++prevCount);
  };
  return (
    <div>
      <div className={classes.counter}>{count}</div>
      <Button name="Context Button" onClick={onClickHandler}></Button>
    </div>
  );
};
export default CounterButton;
