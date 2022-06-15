//useDispatch is used to trigger actions defined in the reducer
//useSelector is used to select state values
import { useDispatch, useSelector } from "react-redux";

//import actions which can be passed to useDispatch method
import {
  incrementVal,
  decrementVal,
  squareVal,
  asyncSquare,
  squareRootVal,
} from "./MathOpsSlice";

export default function Mathops() {
    //val contains the global state value
  const val = useSelector((state) => state.mathops.val);
    console.log(val);
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        {" "}
        The Current Value is <mark>{val}</mark>
      </h1>
      <hr />
      <button
        style={{ width: "75vw", margin: "2em auto" }}
        onClick={() => dispatch(asyncSquare(val))}
      >
        Sqaure the value (async)
      </button>{" "}
      <h4> After 3s the current value is {val}</h4>
      <hr />
      <button
        style={{ width: "75vw", margin: "2em auto" }}
        onClick={() => dispatch(squareVal())}
      >
        Sqaure the value
      </button>{" "}
      <h4> The current value is {val}</h4>
      <hr />
      <button
        style={{ width: "75vw", margin: "2em auto" }}
        onClick={() => dispatch(incrementVal())}
      >
        Increment the value
      </button>{" "}
      <h4> The current value is {val}</h4>
      <hr />
      <button
        style={{ width: "75vw", margin: "2em auto" }}
        onClick={() => dispatch(decrementVal())}
      >
        Decrement the value
      </button>{" "}
          <h4> The current value is {val}</h4>
          <hr />
      <button
        style={{ width: "75vw", margin: "2em auto" }}
        onClick={() => dispatch(squareRootVal())}
      >
        Square root of the value
      </button>{" "}
      <h4> The current value is {val}</h4>
    </>
  );
}
