import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function ListContainer({ list, editBtn, delBtn }) {

  return (
    <div className="list-items">
      {list.map((item, index) => {
            let { id, value } = item;
            return (
              <article key={id} id={id} className="item">
                <header>{value}</header>
                    <IconButton onClick={() => editBtn(id,value)} >
                  <EditIcon fontSize="small" />
                </IconButton>
                    <IconButton onClick={() => delBtn(id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </article>
            );
          })
        }
    </div>
  );
}
