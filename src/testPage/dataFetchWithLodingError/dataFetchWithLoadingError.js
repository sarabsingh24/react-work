import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetchWithLoadingError() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((ref) => {
        setLoading(false);
        setPost(ref.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("som thing went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}

      {error ? error : null}
    </div>
  );
}
