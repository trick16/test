import classes from "./Counter.module.css";

const Counter = (props) => {
  return <div className={classes.counter}>{props.count}</div>;
};
export default Counter;
