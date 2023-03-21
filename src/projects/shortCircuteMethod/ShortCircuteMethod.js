import React from "react";

export default function ShortCircuteMethod() {
  const [name, setName] = React.useState("Armin");
  const [isError, setIsError] = React.useState(false);

  return (
    <div>
      {/* if name var is empty then show "sarab" else show name assign text */}
      {name || "sarab"}
      {/* if name is true then show h4 tag value */}
      <div>{name && <h4>{"some text"}</h4>}</div>

      {/* example of ternery operator */}
      <div>
        <h4>
          {isError ? (
            <p>This is an error...</p>
          ) : (
            <p>This is not an error...</p>
          )}
        </h4>
        <button onClick={() => setIsError(!isError)}>Click</button>
      </div>
    </div>
  );
}
