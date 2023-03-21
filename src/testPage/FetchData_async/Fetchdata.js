import React from "react";

const url = "https://api.github.com/users";

export default function Fetchdata() {
  const [usersList, setUserList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const users = async () => {
    let data = await fetch(url);
    let response = await data.json();
    setLoading(false);
    setUserList(response);
  };

  React.useEffect(() => {
    users();
  }, []);

  return (
    <div>
      {loading ? "Loading" : null}
      <ul>
        {usersList.map((items) => {
          let { login, id, avatar_url, html_url } = items;
          return (
            <li key={id}>
              <img
                src={avatar_url}
                alt={login}
                style={{ width: "44px", height: "44px", borderRadius: "50%" }}
              />
              <div>{login}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
