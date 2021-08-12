import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

export default function Note({ note }) {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          By {note.author} at {note.date}
        </MetaInfo>
      </MetaData>
      <ReactMarkdown>{"- " + note.content.join("\n- ")}</ReactMarkdown>
    </StyledNote>
  );
}
