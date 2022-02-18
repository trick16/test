import React from "react";

const CounterContext = React.createContext({
  count: 0,
  onClick: () => {},
});
export default CounterContext;
