import React from 'react';

import Channel from './Channel';
import ChatBox from './chat-box/ChatBox';

export class Chat extends React.PureComponent {
  render() {
    return (
      <>
        <Channel />
        <ChatBox />
      </>
    )
  }
}