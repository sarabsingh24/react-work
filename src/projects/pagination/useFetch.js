import React from "react";
import Paginate from "./Paginate";

export const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async (link) => {
    try {
      let response = await fetch(link);
      let data = await response.json();
      
      setData(Paginate(data));
      setLoading(false);
    } catch (error) {
      console.log(`some error ${error}`);
    }
  };

  React.useEffect(() => {
    fetchData(url);
  }, []);

  return {
    loading,
    data,
  };
};
