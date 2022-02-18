import Counter from "./Counter";
import Button from "./Button";
import { useContext } from "react";
import CounterContext from "../store/counter-context";

const CounterWrapperIn = (props) => {
  const { count, onClick } = useContext(CounterContext);
  return (
    <>
      <Counter count={count}></Counter>
      <Button name="Click me!" onClick={onClick}></Button>
    </>
  );
};
export default CounterWrapperIn;
