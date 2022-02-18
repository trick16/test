import React, { useState } from "react";
import CounterWrapperIn from "./CounterWrapperIn";
import CounterContext from "../store/counter-context";

const CounterWrapper = (props) => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount((prevCount) => ++prevCount);
  };

  return (
    <CounterContext.Provider value={{ count: count, onClick: countHandler }}>
      <CounterWrapperIn>{props.children}</CounterWrapperIn>
    </CounterContext.Provider>
  );
};
export default CounterWrapper;
