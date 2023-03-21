import React, { useReducer, useEffect } from "react";
import axios from "axios";

const increment = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_DATA_ERROR":
      return {
        loading: false,
        post: {},
        error: "Somthing went wrong",
      };
    default:
      return state;
  }
};

export default function DataFetchUseReducer() {
  const [state, despatch] = useReducer(reducer, increment);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((ref) => {
        despatch({ type: "FETCH_DATA_SUCCESS", payload: ref.data });
      })
      .catch((error) => {
        despatch({ type: "FETCH_DATA_ERROR" });
      });
  });

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}
