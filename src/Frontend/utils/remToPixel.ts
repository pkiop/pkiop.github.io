import { theme } from '@Styles/theme';

const remToPixel = (remValue: string) : number => {
  console.log("remvalue in rem to pixel : ", remValue);
  const remNum = parseInt(remValue.substr(0, remValue.length - 3));
  return remNum * theme.mainFontSize;
}

export default remToPixel;