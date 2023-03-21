import React from 'react';
import {connect} from "react-redux";

 function Single(props) {

    console.log(props);
  const { id, title, body } = props.post;
 

    const deleteHandeler = (id) => {
      props.deletePost(id);
      props.history.push('/');

    };

   return (
     <div>
       <h4>{title}</h4>
       <p>{body}</p>
       <button onClick={() => deleteHandeler(id)}>Delete</button>
     </div>
   );
 }

const mapStateProp = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    post: state.posts.find((post) => post.id == id),
  };
};


const mapDispatchPost = (dispatch) => {
    return {
        deletePost: (id)=> {dispatch({type:"DELETE_POST", id})}
    }
}

export default connect(mapStateProp, mapDispatchPost)(Single);