import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Listcontainer from "./ListContainer";
import Typography from "@material-ui/core/Typography";
import Alertmsg from "./Alertmsg";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const localData = () => {
  return localStorage.getItem("appList")
    ? JSON.parse(localStorage.getItem("appList"))
    : [];
};

export default function Grocerylist() {
  const [list, setList] = React.useState(localData);
  const [value, setValue] = React.useState("");
  const [submitBtn, setSubmitBtn] = React.useState(false);
  const [editId, setEditId] = React.useState(false);

  const [alert, setAlert] = React.useState({
    show: false,
    msg: "hello",
    type: "success",
  });

//   localStorage.removeItem("appList");

 

  const addDataInContainer = () => {
    let itemId = new Date().getTime().toString();
    let newItem = { id: itemId, value: value };
      if (value == ""){
          alertTimer(true, `Empty Field`, "danger");
          setSubmitBtn(false);
    } else if (value != "" && !submitBtn) {
      setList([...list, newItem]);
      setValue("");
      alertTimer(true, `Item Added`, "success");
     
    } else if (value != "" && submitBtn) {
      
        setList(list.map((item) => {
            if (item.id == editId) {
                return { ...item, value: value }
            }
            return item;
        }));
      setValue("");
      setSubmitBtn(false);
        setEditId(null);
      alertTimer(true, `Item edited`, "success");;
        
    }
  };

  const editListBtn = (id, value) => {
    setEditId(id);
    setValue(value);
    setSubmitBtn(true);
  };

  const deleteListBtn = (id) => {
    let newList = list.filter((item) => {
      return item.id != id;
    });
    setList(newList);
    setValue("");
    setSubmitBtn(false);
    alertTimer(true, `Item Deleted`, "danger");
    
  };


 // clear all list 
  const removeAllList = () => {
    alertTimer(true, `deleted all list`, "danger");
    setList([]);
      localStorage.removeItem("appList");
  };

  const alertTimer = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  React.useEffect(()=>{
      localStorage.setItem("appList", JSON.stringify(list));
  },[list])

  const classes = useStyles();
  return (
    <div className="grocery-box">
      <Typography variant="h6" gutterBottom align="center">
        Grocery List
      </Typography>
      <div className="alert-height">
      {alert.show && <Alertmsg {...alert} removeAlert={alertTimer} list={list} />}
          </div>
      <form className={classes.root} noValidate autoComplete="off">
        <input
          type="text"
          placeholder="e.g. mango"
          className="input-box"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          className="submit-btn"
          onClick={addDataInContainer}
        >
          {submitBtn ? "Edit" : "Submit"}
        </Button>
      </form>
      {list.length > 0 && (
        <Listcontainer
          list={list}
          editBtn={editListBtn}
          delBtn={deleteListBtn}
        />
      )}

      {list.length > 0 && (
        <div className="clear-all" onClick={removeAllList}>
          Clear All
        </div>
      )}
    </div>
  );
}
