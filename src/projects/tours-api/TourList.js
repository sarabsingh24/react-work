import React from 'react';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function TourList({ tours, rendomSelect, nextValue, prevValue }) {
 
  const { id, name, info, image, price } = tours;

  const [readmore, setReadmore] = React.useState(false);

  return (
    <div className="tour-card">
      <div className="tour-btn arrowtour-left-arrow" onClick={prevValue}>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <div className="tour-btn arrowtour-right-arrow" onClick={nextValue}>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <div>
        <img src={image} alt={name} className="tour-image" />
      </div>
      <article>
        <div className="price">${price}</div>
        <div className="name">{name}</div>
        <div className={readmore ? "info show-more" : "info show-less"}>
          {readmore ? `${info} ...` : `${info.substring(0, 200)} ...`}
          <span onClick={() => setReadmore(!readmore)} className="read-more">
            {readmore ? "Show less" : "Read more"}
          </span>
        </div>
        <div className="center">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={rendomSelect}
          >
            Select Random Tour
          </Button>
        </div>
      </article>
    </div>
  );
}
