import React from "react";
import Box from "@material-ui/core/Box";
import Tabs from "./Tabs";
import Content from "./Content";
import "./style.css";
import Typography from "@material-ui/core/Typography";

// const url = "https://course-api.netlify.app/api/react-tabs-project";
const url = "https://course-api.com/react-tabs-project";

export default function Tabscontent() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);
  // console.log(data);
  const tabList = async () => {
    let tabDate = await fetch(url);
    let response = await tabDate.json();
    // console.log(response);
    setData(response);
    setLoading(false);
  };

  React.useEffect(() => {
    tabList();
  }, []);

  const changeValue = (e, num) => {
    setValue(num);
  };

  return (
    <div >
      <Typography variant="h4" className="heading-color" gutterBottom>
        Work Experiance
      </Typography>

      <Box display="flex" justifyContent=" center">
        <Box
          display="flex"
          flexWrap="wrap"
          p={1}
          m={1}
          bgcolor="background.paper"
          css={{ maxWidth: 600 }}
        >
          <Box p={1}>
            <Tabs data={data} value={value} changeValue={changeValue} />
          </Box>
          <Box p={1} className="content-bg">
            {loading ? "Loading..." : null}
            <Content data={data[value]} loading={loading} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
