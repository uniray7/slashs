import React from 'react';
import styled from 'react-emotion';

const StyledHeader = styled('div')`
  display: flex;
  align-items: center;
  flex-basis: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #e0e0e0;
`;

export default class Header extends React.PureComponent {
  render() {
    return <StyledHeader>Header</StyledHeader>;
  }
}
