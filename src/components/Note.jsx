import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.delete(props.id);
        }}
      >
        <DeleteForeverIcon style={{ color: "#f5ba13" }} />
      </button>
    </div>
  );
}

export default Note;
