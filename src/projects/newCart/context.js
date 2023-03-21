import React, { useState,useEffect, createContext, useContext,useReducer } from "react";
import { reducer } from "./reducer";
import "./style.css";

const url = "https://course-api.com/react-useReducer-cart-project";
const StoreContext = createContext();
const StoreProvider = StoreContext.Provider;

const initialState = {
  loading: true,
  list: [],
  amount: 0,
  total: 0,
};
 
export default function ContextFile({ children }) {

  const [state, dispatch] = useReducer(reducer,initialState);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const listItems = await response.json();
    //   console.log(listItems);
      dispatch({ type: "LOADING", payload: listItems });

    } catch (error) {
      console.log(error);
    }
};


const increment =(id) => {
   
    dispatch({ type: "INCREMENT",payload:id });
}

const decerease = (id) => {
  dispatch({ type: "DECREMENT", payload: id });
};



useEffect(()=> {
    fetchData(); 
},[]);

  if (state.loading) {
    return <h4>Loading...</h4>;
  }
  return (
    <StoreProvider value={{ ...state, increment, decerease }}>
      <div className="my_cart">{children}</div>
    </StoreProvider>
  );
}

export const useGlobalContext = () => {
    return useContext(StoreContext);
}

