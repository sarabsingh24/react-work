import React, { useState,useMemo } from "react";

const people = [
  { id: 1, name: "Sarab", info: "my name is Sarab", income: "4000" },
  { id: 2, name: "Armin", info: "my name is Armin", income: "2000" },
  { id: 3, name: "Preeti", info: "my name is Preeti", income: "8000" },
];

const mostExpensive = (data) => {
console.log("MY fun")

    return (data.reduce((total, num) => {
      console.log("reduce fun");
      let price = num.income;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0)
    )

}


export default function Index() {
  const [value, setValue] = React.useState(0);
  const [cart, setCart] = React.useState(0);

  // it will not run mostExpensive() function evertime to calculate.....Ristric unnaccessary rendering
  const maxCost = useMemo(() => mostExpensive(people), [people]);

  // it will not load componennt evertime when counter is changed.....Ristric unnaccessary loading
  const cartHandeler = React.useCallback(() => {
    setCart(cart + 1);
  }, [cart]); // this function will run only when cart is update

  console.log("First compo");
  return (
    <div>
      <h4>{maxCost}</h4>
      <h4>Counter: {value}</h4>
      <button onClick={() => setValue(value + 1)}>increment</button>

      <h4>cart: {cart}</h4>

      <List people={people} cartFun={cartHandeler} />
    </div>
  );
}
  // React.memo componennt will not load untill people data is change.....Ristric unnaccessary loading
const List = React.memo(({ people, cartFun }) => {

  console.log("Second compo");
  return (
    <>
      {people.map((item) => {
        return <Group key={item.id} item={item} cartFun={cartFun} />;
      })}
    </>
  );
});

const Group = ({ item, cartFun }) => {
  console.log("Third compo");
  return (
    <div>
      {item.name}
      <button onClick={cartFun}>increment</button>
    </div>
  );
};
