import React from "react";
import Menu from "./Data";
import Fooditems from "./FoodItems";
import Topmenu from "./TopMenu";
import Header from "./Heading";
import "./Style.css";

const myCategory = Menu.map((items) => items.category);

// const filterValue = ["All", ...new Set(Menu.map((items) => items.category))];
// console.log(filterValue);

export default function OurMenu() {
  const [menuItems, setMenuitems] = React.useState(Menu);
  const [categories, setCategory] = React.useState(myCategory);

  const filterItems = (category) => {
    if (category == "All") {
      setMenuitems(Menu);
      return;
    }
    const newItems = Menu.filter((items) => {
      return items.category == category;
    });
    setMenuitems(newItems);
  };
  return (
    <div>
      <Header />
      <section className="page-container">
        {/* <Menupage mymenu={menuItems} /> */}
        <Topmenu filterItems={filterItems} categories={categories} />
        <Fooditems items={menuItems} />
      </section>
    </div>
  );
}
