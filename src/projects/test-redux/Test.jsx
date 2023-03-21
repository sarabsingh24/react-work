import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import HeaderType from './HeaderType';
import Footer from './Footer';

const initial = {
  list :[],
  count : 3,
  total:0,
}

const totalAmount = (newState)=>{
  const myCount = newState.reduce((acc,curr)=> {
  const {amount, cost} = curr;
  acc.totalItem += amount;
  acc.gt += amount *  cost;
  return acc;
},{totalItem: 0, gt:0});

return myCount;

}

function reducer(state,action){
  if(action.type === 'INCREASE'){
     let newState = state.list.map(item => {
       if(item.id === action.payload.id){
         item.amount = item.amount + 1;
        
       }
      return item
    })
 let myAccount = totalAmount(newState);
 
    return {...state, list: newState, count: myAccount.totalItem,total : myAccount.gt };

  } else if(action.type === 'DECREASE'){
   let newState =[];
    
   if(action.payload.amount <= 1){
      newState = state.list.filter(item => item.id !== action.payload.id)
     
   }else{
     newState = state.list.map(item => {
       if(item.id === action.payload.id){
         item = {...item, amount: item.amount - 1,  }
       }
       return item
     })
   }
  let myAccount = totalAmount(newState);
   return {...state, list: newState , count: myAccount.totalItem,total : myAccount.gt  };

  }else if(action.type === 'RESET'){
     let newState = state.list.map(item => {
         item.amount = 1;
      return item
    })
    let myAccount = totalAmount(newState);
    return {...state, list: newState , count: myAccount.totalItem,total : myAccount.gt  };
  }else if(action.type === 'START'){
    
    let newState = action.payload.myList.map(item => item);
    let myAccount = totalAmount(newState);
    return {...state, list : newState, count: myAccount.totalItem,total : myAccount.gt  };
  }

  return state;
  
//    switch (action.type){
//      case 'INCREASE' : 
//        console.log(action.payload.id);
//     //  const newState = state.filter(item => item.id === action.payload.id);
//     //  console.log(newState);
//     // return {...state, count:newState.count + 1};

//     break;
//   case 'DECREASE':
//     return {...state, count:state.count - 1};
//     break;
//  case 'RESET':
//     return {...state, count:0};
//     break;
//   default: 
//   return state;
  
//    }

};

const store = createStore(reducer, initial);

export default function TestRedux() {
  return (
    <Provider store={store} className="App">
      <HeaderType />
      <h2>Start editing to see some magic happen!</h2>
        <Footer />
    </Provider>
  );
}

