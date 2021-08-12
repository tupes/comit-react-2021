import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
  background-color: #fff;
`;

const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

export default function Header(props) {
  return (
    <HeaderBar backgroundColor={props.backgroundColor}>
      <HeaderText>Notes App</HeaderText>
    </HeaderBar>
  );
}
