import React from 'react';
import Home from './Home';
import Modal from "./Modal";
import Sidebar from './Sidebar';
import {AppProvider} from './context'

const reducer = (state,action) => {

  if(action.type == "ADD_ITEMS"){
    const newPeople = [ ...state.people, action.payload ];
    console.log(newPeople);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "name added",
    };
  }
return state;
// throw new Error("there is some error")
}

const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent:""
}

export default function Index() {

  const [menu, setMenu] = React.useState(false);
  const [name, setName] = React.useState('');
const [state,dispatch] = React.useReducer(reducer,defaultState);

const sideMenuHandeler = () => {
  setMenu(!menu);
}


const submitHandeler = (e) => {
e.preventDefault();
if(name){
  
  const newItem = {id: new Date().getTime().toString(), name}
  dispatch({ type: "ADD_ITEMS", payload: newItem });

}

}

    return (
      <div className="side-bar">
        <form onSubmit={submitHandeler}>
          <div>{state.modalContent}</div>
          {state.isModalOpen && "Item Added"}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Subimt</button>
        </form>
        {state.people.map((item) => {
          return <div key={item.key}>{item}</div>;
        })}
        <AppProvider>
          <Home clickFunction={sideMenuHandeler} />
          <Modal />
          <Sidebar menuStatus={menu} clickFunction={sideMenuHandeler} />
        </AppProvider>
      </div>
    );
}
