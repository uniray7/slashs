import * as React from "react";

interface Props {
  content: string;
}

export default class Message extends React.Component<Props, {}> {
  render() {
    const { content } = this.props;
    return <div>{content}</div>;
  }
}
