import React from 'react';
import styled from 'react-emotion';
import ContactSupportIcon from '@material-ui/icons/ContactSupportOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

const StyledHeader = styled('div')`
  display: flex;
  align-items: center;
  flex-basis: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 20px;
  font-weight: bold;
`;

const StyledToolBar = styled('div')`
  display: flex;
  margin-left: auto;
  & > * {
    margin-left: 10px;
  }
`;

export default class Header extends React.PureComponent {
  render() {
    return (
      <StyledHeader>
        <svg width="30" height="30" data-jdenticon-value="user127" />{' '}
        Iron Man
        <StyledToolBar>
          <NotificationsIcon />
          <ContactSupportIcon />
        </StyledToolBar>
      </StyledHeader>
    );
  }
}
