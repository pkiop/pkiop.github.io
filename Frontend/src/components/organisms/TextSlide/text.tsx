import React, {
  FC,
} from 'react';

import styled from 'styled-components';

interface mainProps {
  mt: number,
  mb: number,
}

const Main = styled.p`
  max-width:80%;
  font-size:36px; 
  color:#333; 
  transition:color .5s;
  margin-top: ${(props:mainProps) => props.mt}px;
  margin-bottom: ${(props:mainProps) => props.mb}px;
  white-space: normal;
  word-wrap: break-word;
`;

interface Props {
  refObj:React.RefObject<HTMLDivElement>
  mt: number;
  mb: number;
  text: string;
}

const App: FC<Props> = (props) => (
  <Main ref={props.refObj} mt={props.mt} mb={props.mb}>
    {props.text}
  </Main>
);

export default App;
