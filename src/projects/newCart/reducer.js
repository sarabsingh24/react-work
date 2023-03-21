 

 
 export function reducer(state,action){

if (action.type == "LOADING")  {
    return ({...state,loading:false, list: action.payload})
}
if (action.type == "INCREMENT") {
  let update = state.list.map(item=> {
      if(item.id == action.payload){
          return ({...item, amount: item.amount + 1})
      }
      return item
  })
 
    return { ...state, list: update };
}
if (action.type == "DECREMENT") {
  let update = state.list
    .map((item) => {
      if (item.id == action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    })
    .filter((item) => item.amount > 0);

  return { ...state, list: update };
}

return state;
 }