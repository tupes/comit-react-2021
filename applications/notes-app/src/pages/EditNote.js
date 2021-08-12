import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { NotesContext } from "../providers/NotesProvider";

const Wrapper = styled.div`
  height: 100%;
`;
const Form = styled.form`
  height: 100%;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

export default function EditNote(props) {
  const { id } = useParams();
  const { getNote } = useContext(NotesContext);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    const noteId = Number(id);
    const note = getNote(noteId);
    setCurrentNote(note);
  }, []);

  return (
    <Wrapper>
      <Form>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Type your note here"
          value={currentNote.content}
        />
        <button type="submit">Save</button>
      </Form>
    </Wrapper>
  );
}
