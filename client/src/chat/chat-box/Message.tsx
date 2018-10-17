import React from 'react';
import styled from 'react-emotion';

const StyledMessage = styled('div')`
  display: flex;
  min-height: 30px;
`;

const StyledAvator = styled('div')`
  margin-right: 10px;
  height: 30px;
`;

const StyledText = styled('div')`
  line-height: 30px;
`;

interface MessageProp {
  avator?: string;
  text: string;
}

const toHtmlParagraph = (text: string) => {
  if (!text) return text;
  const lines = text.split('\n');
  return lines.map(
    (line, idx) =>
      idx === lines.length ? (
        line
      ) : (
        <>
          {line}
          <br />
        </>
      )
  );
};

export default class Message extends React.PureComponent<MessageProp> {
  render() {
    const { text } = this.props;
    return (
      <StyledMessage>
        {/* <StyledAvator>{avator}</StyledAvator> */}
        <StyledAvator>
          <svg width="30" height="30" data-jdenticon-value="user128" />
        </StyledAvator>
        <StyledText>{toHtmlParagraph(text)}</StyledText>
      </StyledMessage>
    );
  }
}
