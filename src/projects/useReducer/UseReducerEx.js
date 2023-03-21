import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import Data from "./Data";

const reducer = (state, action) => {
  const newPeople = [...state.people, action.payload];
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: newPeople,
      isModel: true,
      content: "Item Added",
    };
  }
  if (action.type === "NO_ITEM" ) {
    return {
      ...state,
     
      isModel: true,
      content: "please add valid value",
    };
  }
  if (action.type === "REMOVE") {
    const filter = state.people.filter(item => item.id !== action.payload)
    return {
      ...state,
      people: filter,
      isModel: true,
      content: "one item removed",
    };
  }

  return state;
};

const initialState = {
  people: Data,
  isModel: false,
  content: "",
};

export default function UseReducerEx() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandeler = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };

      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_ITEM" });
    }
  };

  const removeHandel =(id) => {
    
    dispatch({ type: "REMOVE", payload: id });
  }

  return (
    <div>
      {state.isModel && <Modal content={state.content} />}
      <form onSubmit={(e) => submitHandeler(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {state.people.map((item) => {
        return <div key={item.id}>
          {item.name}
          <button type="button" onClick={
            () => removeHandel(item.id)}>remove</button>
          </div>;
      })}
    </div>
  );
}
