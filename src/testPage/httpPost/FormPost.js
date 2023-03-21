import React from "react";
import axios from "axios";

export default function FormPost() {
  const article = {
    userId: "",
    title: "",
    body: "",
  };

  const [news, setNews] = React.useState(article);
  const { userId, title, body } = news;

  const inputChangeHandeler = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    console.log(news);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", news)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error at line 0");
      });
  };

  return (
    <form onSubmit={submitHandeler}>
      <div>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={inputChangeHandeler}
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={inputChangeHandeler}
        />
      </div>
      <div>
        <input
          type="text"
          name="body"
          value={body}
          onChange={inputChangeHandeler}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
