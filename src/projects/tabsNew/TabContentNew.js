import React from "react";
import Info from "./Info";
import Tab from "./Tab"
import "./style.css";

const url = "https://course-api.com/react-tabs-project";

export default function TabcontentNew() {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState(0);

  const fetchData = async (u) => {
    try {
      const response = await fetch(u);
      const data = await response.json();
      
      setList(data);
      setLoading(false);
      
    } catch (e) {
      console.log("Error type is " + e);
    }
  };

const tabHandler = (num) => {
  setValue(num);
}

  React.useEffect(() => {
    fetchData(url);
  
  }, []);


  if (loading){
    return <h3> "loading..."</h3>
  }
    return (
      <section className="tab-container">
        <Tab list={list} tabHandler={tabHandler}  value={value}/>
        <Info list={list[value]} />
      </section>
    );
}
