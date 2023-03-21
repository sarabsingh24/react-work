import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { ResponsiveCheck } from "../../components/responsive/ResponsiveCheck";
import List from "./List";
import Data from "./Data";
import "./style.css";

// const url = "https://course-api.netlify.app/api/react-tours-project";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "440px",
    padding: "16px",
    textAlign: "center",
    boxSizing: "border-box",
  },
}));

export default function Reviews() {
  const classes = useStyles();
  const { IsDesktop } = ResponsiveCheck();
  const [data, setData] = React.useState(Data);
  // const [loading, setLoading] = React.useState(true);
  console.log(data);
  // const fetchData = async () => {
  //   try {
  //     let getData = await fetch(url);
  //     let response = await getData.json();
  //     console.log(response);
  //     setData(response);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <Paper
        elevation={3}
        className={classes.root + " cent-middle "}
        style={{ width: IsDesktop ? "460px" : "90%" }}
      >
        {/* {loading ? "Loading..." : <List data={data} />} */}
        <List data={data} />
      </Paper>
    </div>
  );
}
