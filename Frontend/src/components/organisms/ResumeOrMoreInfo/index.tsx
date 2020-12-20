import React from 'react';
import * as S from './style';

interface Props {
  refs: any;
}
function App(props: Props) {
  return (
    <S.Main ref={props.refs} >
      <S.TextBox><a href="https://github.com/pkiop/pkiop/blob/master/resume.pdf" target="_blank">📜 Resume</a></S.TextBox>
      <S.TextBox>🧐 MoreInfo? Scroll 👇</S.TextBox>
    </S.Main>
  );
}

export default App;
