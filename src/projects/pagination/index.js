import React, { useState, useEffect } from "react";
import Followers from "./Followers";
import Paginate from "./Paginate";
import PagesCount from "./PagesCount";
import { useFetch } from "./useFetch";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export default function Index() {
  const { data, loading } = useFetch(url);

  const [page, setPage] = useState(9);
  const [follower, setFollower] = useState([]);

  const previousHandeler = () => {
    console.log(page);
    if (page < 1) return setPage(0);
    setPage(page - 1);
  };

  const nextHandeler = () => {
    setPage((oldState) => {
      let nextPage = oldState + 1; 
      if (nextPage > data.length - 1) {
        nextPage = data.length - 1;}
        return nextPage;
    })
  };

  useEffect(() => {
    if (loading) return;
    setFollower(data[page]);
   
  }, [loading, page]);

  return (
    <div>
      {loading ? "loading..." : "not noading"}
      {/* <Paginate /> */}
      <div>
        {follower.map((item) => {
          return <Followers key={item.id} {...item} />;
        })}
      </div>
      <span onClick={previousHandeler}>Prev</span>
      {data.map((_, index) => {
        return <PagesCount key={index} count={index} page={page} />;
      })}
      <span onClick={nextHandeler}>Next</span>
    </div>
  );
}
