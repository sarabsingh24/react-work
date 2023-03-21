import React from "react";

const Paginate = (followers) => {
  let perPage = 9;
  let page = Math.ceil(followers.length / perPage);

  let newFollowers = Array.from({ length: page }, (_, index) => {
      
    let start = perPage * index;
    return followers.slice(start, start + perPage);
  });
return(newFollowers);
//   return <div>pageCount {perPage}</div>;
};
export default Paginate;
