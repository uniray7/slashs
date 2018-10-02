import * as React from "react";

import Message from "./Message";

class Chat extends React.Component<any, {}> {
  componentDidMount() {
    this.props.subscribeToNewMessage();
  }

  render() {
    const { messages } = this.props;
    return messages.map((msg: any) => (
      <Message key={msg.id} content={msg.content} />
    ));
  }
}

export default Chat;
