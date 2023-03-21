import React from "react";

const url = "https://api.github.com/users";

export default function FetchDataWithError() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  //   React.useEffect(() => {
  //     // fetch(url)
  //     //   .then((rsp) => rsp.json())
  //     //   .then((user) => console.log(user));
  //   }, []);

  if (loading) {
    return <div>Loading......</div>;
  }
  return <div>User Data</div>;
}
