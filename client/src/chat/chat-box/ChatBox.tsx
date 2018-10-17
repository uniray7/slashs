import React from 'react';
import styled from 'react-emotion';

import Header from './Header';
import { Input } from './Input';
import { Messages } from './Messages';

const StyledChatBox = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
`;

export default class ChatBox extends React.PureComponent {
  render() {
    return (
      <StyledChatBox>
        <Header />
        <Messages />
        <Input />
      </StyledChatBox>
    );
  }
}
