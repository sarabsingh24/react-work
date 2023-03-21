import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Typography from "@material-ui/core/Typography";
export default function QuestionAns({ id, title, info }) {
  const [display, setDesplay] = React.useState(false);
  const showAnswerHandeler = () => {
    setDesplay(!display);
  };
  return (
    <div onClick={showAnswerHandeler} className="question">
      <h4>
        {title}
        <button className="btn">
          {display ? <RemoveIcon /> : <AddIcon />}
        </button>
      </h4>

      {display && <p className="answer">{info}</p>}
    </div>
  );
}
