import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

export default function UseCallBack() {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(24000);

  const ageIncrement = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryIncrement = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count type="age" count={age} />
      <Button onClick={ageIncrement}>Age Increment</Button>
      <br />
      <br />
      <Count type="salary" count={salary} />
      <Button onClick={salaryIncrement}>Salary Increment</Button>
    </div>
  );
}
