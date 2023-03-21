import React from "react";
import "./style.css";

const link = "https://api.github.com/users";

export default function FetchData() {
  const [users, setUsers] = React.useState([]);

  const fetchData = async (url) => {
    const data = await fetch(url);
    const response = await data.json();
    setUsers(response);
  };

  React.useEffect(() => {
    fetchData(link);
  }, []);

  return (
    <div className="card">
      <h4 className="title">Github Users</h4>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url: image, type, html_url } = user;
          console.log(user);
          return (
            <li key={id}>
              <article className="content">
                <img src={image} alt={login} />
                <div>
                  <strong className="user">{login}</strong>
                  <br />
                  <a href={html_url} className="link">
                    {type}
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
