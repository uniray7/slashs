import React from 'react';
import styled from 'react-emotion';

const StyledMessage = styled('div')`
  display: flex;
`;

const StyledAvator = styled('div')`
  margin-right: 10px;
  height: 30px;
`;

const StyledText = styled('div')`
  line-height: 30px;
`;

interface MessageProp {
  avator: JSX.Element;
  text: string;
}

const toHtmlParagraph = (text: string) => {
  if (!text) return text;
  const lines = text.split('\n');
  return lines.map((line, idx) => (idx === lines.length) ? line : <>{line}<br /></>);
};

export default class Message extends React.PureComponent<MessageProp> {
  render() {
    const { avator, text } = this.props;
    return (
      <StyledMessage>
        <StyledAvator>{avator}</StyledAvator>
        <StyledText>{toHtmlParagraph(text)}</StyledText>
      </StyledMessage>
    );
  }
}
