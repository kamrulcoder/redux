import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "./redux/actions/counterActions";


const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div  className="counter">
      <h1>React Redux Example</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;