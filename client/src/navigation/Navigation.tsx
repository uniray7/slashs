import React from 'react';
import styled, { css } from 'react-emotion';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const StyledNavigation = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70px;
  height: 100vh;
  background: #333333;
  color: #cdcdcd;
`;

const StyledFooter = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 20px;
`;

const styles = {
  icon: css`
    margin-top: 20px;
  `
};

export class Navigation extends React.PureComponent {
  render() {
    return (
      <StyledNavigation>
        <HomeIcon fontSize="large" className={styles.icon} />
        <PeopleIcon fontSize="large" className={styles.icon} />
        <ChatIcon fontSize="large" className={styles.icon} />
        <StyledFooter>
          <AccountCircleIcon fontSize="large" className={styles.icon} />
          <SettingsIcon fontSize="large" className={styles.icon} />
        </StyledFooter>
      </StyledNavigation>
    );
  }
}
