import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

 function List({posts}) {

    return (
        <div>
            {
                posts.map(post => {
                    const {id,title} = post
                    return (
                      <Link to={`/${id}`} key={id}>
                        <h4>{title}</h4>
                      </Link>
                    );
                })
            }
        </div>
    )
}

const mapStateProp = (state) => {
    return {
        posts: state.posts
    };
}


export default connect(mapStateProp)(List);