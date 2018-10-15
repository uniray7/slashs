import React from 'react';
import styled from 'react-emotion';
import Message from './Message';

const StyledMessages = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const MESSAGES = [
  {
    avator: <svg width="30" height="30" data-jdenticon-value="user127" />,
    text: 'I am a good guy'
  },
  {
    avator: <svg width="30" height="30" data-jdenticon-value="user128" />,
    text: 'No, you are not'
  },
  {
    avator: <svg width="30" height="30" data-jdenticon-value="user127" />,
    text: 'Okk'
  },
  {
    avator: <svg width="30" height="30" data-jdenticon-value="user128" />,
    text:
      '刚刚那个datetime的问题又是和mysql有关\n因为这个test当初是给postgresql跑的'
  },
  {
    avator: <svg width="30" height="30" data-jdenticon-value="user128" />,
    text: '欸是你說你有用citi bank的什麼全球速匯嗎'
  }
];

export default class Messages extends React.PureComponent {
  render() {
    return <StyledMessages>{MESSAGES.map(msg => (
      <Message avator={msg.avator} text={msg.text} />
    ))}</StyledMessages>;
  }
}
