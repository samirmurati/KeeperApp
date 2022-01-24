import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Note from "./Note";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [notes, setNotes] = useState([]);
  console.log(notes);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });

    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form>
        <TextField
          onChange={handleChange}
          name="title"
          className="textField"
          id="standard-basic"
          label="Title"
          value={note.title}
        />
        {/* <input type="text" placeholder="Title"></input> */}
        <textarea
          onChange={handleChange}
          name="content"
          type="text"
          rows="3"
          placeholder="Take a note"
          value={note.content}
        />
        <button onClick={handleClick} className="addButton">
          <AddIcon />
        </button>
      </form>
      <div>
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              delete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CreateArea;
