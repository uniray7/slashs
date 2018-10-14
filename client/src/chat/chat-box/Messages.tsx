import React from 'react';
import styled from 'react-emotion';

const StyledMessages = styled('div')`
  display: flex;
  flex: 1;
`;

export default class Messages extends React.PureComponent {
  render() {
    return (
      <StyledMessages>
       {''}
      </StyledMessages>
    );
  }
}
