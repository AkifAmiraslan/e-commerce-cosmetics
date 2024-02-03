import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/counterSlice";
import { useState } from "react";

const Example = () => {
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);

  const num = useSelector((state) => state.counter.currentNum);

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByValueHandler = () => {
    dispatch(incrementByValue(incrementValue));
  };

  return (
    <div>
      <input type="text" value={num} />
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <div>
        <input
          onChange={(e) => setIncrementValue(+e.target.value)}
          type="number"
          name=""
          id=""
        />
        <button onClick={incrementByValueHandler}>INCREMENT</button>
      </div>
    </div>
  );
};

export default Example;
