import React from 'react';
import { FC } from 'react';
import styled from "styled-components";
import MenuLinkBtn from '@Components/MenuLinkBtn';

const Main = styled.div<{clicked: boolean}>`
  position: absolute;
  background-color: gray;
  top: 60px;
  right:0;
  display: ${props => props.clicked ? "flex" : "none"};
  flex-direction: column;
`
const App: FC<{clicked: boolean}> = (props) => {
  return (
    <Main clicked={props.clicked}>
      <MenuLinkBtn title="Home" link="/"/>
      <MenuLinkBtn title="Portfolio" link="portfolio" />
      <MenuLinkBtn title="Post" link="post"/>
      <MenuLinkBtn title="TIL" link="til"/>
      <MenuLinkBtn title="LM" link="lm"/>
    </Main>
  )
};

export default App;