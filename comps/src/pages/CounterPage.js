import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const CHANGE_COUNT = "change-count";
const SET_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_ADD = "add-value-to-add";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_ADD:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
    // throw new Error("unexpected action type: " + action.type);
  }

  // if (action.type === CHANGE_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count + action.payload,
  //   };
  // }
  // if (action.type === SET_VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }
  //
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(state.count + 1);
    dispatch({
      type: CHANGE_COUNT,
      payload: 1,
    });
  };
  const decrement = () => {
    // setCount(state.count - 1);
    dispatch({
      type: CHANGE_COUNT,
      payload: -1,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setCount(state.count + state.valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE_TO_ADD,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
