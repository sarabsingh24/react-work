import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "./List";

import Typography from "@material-ui/core/Typography";
import { WindowWidth } from "./WindowWidth";
import "./Style.css";
const url = "https://course-api.netlify.app/api/react-tours-project";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
}));
export default function MyTour() {
  const classes = useStyles();
  const { IsDesktop } = WindowWidth();
  const [loading, setLoading] = React.useState(true);
  const [tour, setTour] = React.useState([]);

  const tourList = async () => {
    try {
      let tourData = await fetch(url);
      let response = await tourData.json();
      console.log(response);
      setTour(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  React.useEffect(() => {
    tourList();
  }, []);

  if (loading) {
    return <Typography className="cent-middle loading">Loading...</Typography>;
  }
  return (
    <div
      className={classes.root}
      style={{ width: IsDesktop ? "400px" : "100%" }}
    >
      <List tour={tour} />
    </div>
  );
}
