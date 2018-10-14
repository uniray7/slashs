import React from 'react';
import styled from 'react-emotion';

const StyledChannel = styled('div')`
  width: 220px;
  height: 100vh;
  background: #555555;
`;

export default class Channel extends React.PureComponent {
  render() {
    return <StyledChannel>Channel</StyledChannel>;
  }
}
