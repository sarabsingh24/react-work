import React from "react";
import Backdrop from "./Backdrop";
import Popupbox from "./PopupBox";

export default function Popup() {
  const [open, setOpen] = React.useState(false);

  const openPopupHandeler = () => {
    setOpen(true);
  };

  const closePopupHandeler = () => {
    setOpen(false);
  };
  return (
    <div>
      <Backdrop show={open} />
      <Popupbox show={open} close={closePopupHandeler} />

      <button onClick={openPopupHandeler}>open popup</button>
    </div>
  );
}
