import React from "react";

export default function UseRefExample() {
  const inputField = React.useRef(null);

  const formHandeler = (e) => {
    e.preventDefault();
      console.log(inputField.current.value) ;
    inputField.current.value = "sarabsingh";
  };
  console.log("first");
  React.useEffect(() => {
    console.log("third");
    console.log(inputField.current.focus());
  });
  return (
    <>
      {console.log("second")}
      <form onSubmit={formHandeler}>
        <input type="text" ref={inputField} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
