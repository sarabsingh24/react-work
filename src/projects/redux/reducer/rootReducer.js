const initState = {
  posts: [
    { id: 100, title: "Sarab", body: "my name is Sarab" },
    { id: 200, title: "Armin", body: "my name is Armin" },
    { id: 300, title: "Preeti",body: "my name is Preeti" },
  ],
};

const rootReducer = (state = initState,action) => {

    if (action.type == "DELETE_POST") {
        let newLists = state.posts.filter((post) => post.id !== action.id);

        return {
          ...state,
          posts: newLists,
        };
    }
    return state;
}



export  {rootReducer};