const initialState = {
  count:0,
  name: 'papa'
};

const changeStateNumber = (state = initialState, action) => {
  if (action.type == "INCREMENT") {
    if (state.count >= 9) {
      return 10;
    }
    return {...state, count: state.count + 1, name:action.payload };
  }
  if (action.type == "DECREMENT") {
    if (state.count <= 1) {
      return 0;
    }
    return  {...state, count: state.count - 1, name:action.payload };
  }
  return state;
};

export default changeStateNumber;
