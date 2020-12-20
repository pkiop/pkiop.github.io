import React, {
  useEffect, FC, useState,
} from 'react';
import logo from 'public/images/logo.png';

import styled from 'styled-components';
import MenuLinkBtn from 'components/MenuLinkBtn';
import HeaderBarMenuDropdown from 'components/HeaderBar-MenuDropdown';
import hambugBtn from 'public/images/hamburg.svg';
import { theme } from 'styles/theme';
import { remToPixel } from 'utils/remToPixel';
import { useWindowSize } from 'hooks/ElementSize';

const Logo = styled.img`
  width: ${(props) => props.theme.headerbarContentHeight};
  height: ${(props) => props.theme.headerbarContentHeight};
  border: 1px solid black;
`;

const MenuButtons = styled.div`
  border: 1px solid black;
  @media only screen and (min-width: ${(props) => props.theme.smallWidth}) {
    display: flex;
  }
  @media only screen and (max-width: ${(props) => props.theme.smallWidth}) {
    display: none;
  }
`;

const Main = styled.div`
  position: relative;
  display:flex;
  justify-content: space-between;
  background-color:${(props) => props.theme.mainColor};
  height:${(props) => props.theme.headerbarHeight};
`;

const BurgerBtn = styled.img`
  width: ${(props) => props.theme.headerbarContentHeight};
  height: ${(props) => props.theme.headerbarContentHeight};
  @media only screen and (min-width: ${(props) => props.theme.smallWidth}) {
    display: none;
  }
  @media only screen and (max-width: ${(props) => props.theme.smallWidth}) {
    display: flex;
  }
`;

const burgerOnClick = (clicked: boolean,
  setClicked:React.Dispatch<React.SetStateAction<boolean>>) => () => {
  setClicked(!clicked);
};

const App: FC = (props: any) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width > remToPixel(theme.smallWidth)) {
      setClicked(false);
    }
  }, [width]);
  return (
    <Main>
      <Logo src={logo}/>
      <MenuButtons>
        <MenuLinkBtn title="Home" link="/"/>
        <MenuLinkBtn title="Portfolio" link="portfolio" />
        <MenuLinkBtn title="Post" link="post"/>
        <MenuLinkBtn title="TIL" link="til"/>
        <MenuLinkBtn title="LM" link="lm"/>
      </MenuButtons>
      <BurgerBtn onClick={burgerOnClick(clicked, setClicked)} src={hambugBtn}/>
      <HeaderBarMenuDropdown clicked={clicked}></HeaderBarMenuDropdown>

    </Main>
  );
};

export default App;