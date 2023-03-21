import React from "react";

export default function MultipleReturn() {
  const [status, setStatus] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 2000);
  });

  if (status) {
    return <h4>Loading...</h4>;
  }

  return <div>Data loaded</div>;
}
