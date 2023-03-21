import React, { useEffect } from "react";
import MyList from "./MyList";
import Alert from "./Alert";
import "./style.css";


const getLocalStorage = () => {
  let list = localStorage.getItem("myList");
  if(list){
    return JSON.parse(localStorage.getItem("myList"));
  }else{
    return []
  }
  
}

export default function FoodItem() {
  const [name, setName] = React.useState("");
  const [alert, setAlert] = React.useState({ show: false, msg: "", type: "" });
  const [isEditing, setIsEditing] = React.useState(false);
  const [list, setList] = React.useState(getLocalStorage());
  const [editID, setEdidId] = React.useState("");

  const formHandeler = (e) => {
    e.preventDefault();

    if (!name) {
      // Display Alert
      showAlert(true, "Please enter value", "danger");
    } else if (name && isEditing) {
      // add in list
      list.find((item) => { 
        if (item.id == editID) {
          item.title = name;
        }
        return item;
      });
      showAlert(true, `${name} edited`, "success");
      setName("");
      setEdidId(null);
      setIsEditing(false);
    } else {
      showAlert(true, `${name} added`, "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const deleteItem = (id) => {
    const filterItems = list.filter((item) => item.id != id);
    showAlert(true, `Item Removed`, "danger");
    setList(filterItems);
    setName("");
    setIsEditing(false);
  };

  const clearAllHandeler = () => {
    showAlert(true, `All Items deleted`, "danger");
    setList([]);
  };

  const editItem = (id) => {
    let filterItems = list.find((item) => item.id == id);
    setEdidId(id);
    setName(filterItems.title);
    setIsEditing(true);
  };

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(list));
  }, [list]);

  

  return (
    <div className="food-item-list-container">
      <div className="alert-height">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      </div>
      <form onSubmit={formHandeler}>
        <input
          type="text"
          placeholder="Item Name"
          className="food-item-input-field "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="food-item-btn">
          {!isEditing ? "Add Item" : "Edit Item"}
        </button>
      </form>
      {list.length > 0 && (
        <div>
          <MyList list={list} deleteItem={deleteItem} editItem={editItem} />
          <button className="clear-item" onClick={clearAllHandeler}>
            Clear Items
          </button>
        </div>
      )}
    </div>
  );
}
