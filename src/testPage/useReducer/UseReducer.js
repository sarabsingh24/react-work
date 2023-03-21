import React, { useReducer } from "react";
import ShowBox from "./ShowBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "office":
      return {
        ...state,
        isModalUpdate: true,
        people: ["sarab", "Amit", "sonu"],
        modalContant: "My office Frends",
        num: action.value,
      };
    case "school":
      return {
        ...state,
        isModalUpdate: true,
        people: ["Armin", "Netya", "Naytee"],
        modalContant: "My school Frends",
        num: action.value,
      };
    default:
      return state;
  }
};
const defaultState = {
  people: [],
  isModalUpdate: false,
  modalContant: "",
  num: 0,
};
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const changeHandeler = (e) => {
    let type = e.target.getAttribute("dev-name");
    let value = e.target.getAttribute("dev-val");
    console.log(value);
    dispatch({ type: type, value: value });
  };
  return (
    <div>
      {state.isModalUpdate ? <ShowBox content={state} /> : "Data not available"}
      <button onClick={changeHandeler} dev-name="office" dev-val={8}>
        My Office
      </button>
      <button onClick={changeHandeler} dev-name="school" dev-val={4}>
        My school
      </button>
    </div>
  );
}
