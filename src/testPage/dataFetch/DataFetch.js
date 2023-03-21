import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [btnChange, setBtnChange] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnChange}`)
      .then((resp) => {
        console.log(resp.data);
        setPost(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [btnChange]);

  const changePostHandler = () => {
    setBtnChange(id);
  };

  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={changePostHandler}>click</button>

      {post.title}
      {post.body}
      {post.id}
    </div>
  );
}
