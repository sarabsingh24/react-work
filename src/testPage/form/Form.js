import React from "react";

export default function Form() {
  const [inputData, setInputData] = React.useState({ name: "sarab", age: 45 });
  const [ingrediant] = React.useState([inputData.name]);

  const changeNameHandeler = (e) => {
    setInputData({ ...inputData, name: e.target.value });
  };
  const changeAgeHandeler = (e) => {
    setInputData({ ...inputData, age: e.target.value });
  };

  const formSubmitHandeler = (e) => {
    e.preventDefault();
    if (inputData.name && inputData.age) {
      // it will chack if string is empty
      console.log(inputData.name, inputData.age);
    } else {
      console.log("string is empty");
    }
  };

  console.log(inputData);

  return (
    <div>
      <form onSubmit={formSubmitHandeler}>
        <input
          type="text"
          value={inputData.name}
          name="name"
          onChange={changeNameHandeler}
        />
        <input
          type="text"
          value={inputData.age}
          name="age"
          onChange={changeAgeHandeler}
        />
        <button type="submit">Submit</button>
      </form>

      <p>{}</p>
    </div>
  );
}
