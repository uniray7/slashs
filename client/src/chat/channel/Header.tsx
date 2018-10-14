import React from 'react';
import styled, { css } from 'react-emotion';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const StyledHeader = styled('div')`
  display: flex;
  align-items: center;
  flex-basis: 50px;
  padding: 0 10px;
  background: #454545;
  border-bottom: 1px solid #343434;
`;

const styles = {
  icon: css`
    color: #aaaaaa;
  `
};

export default class Header extends React.PureComponent {
  render() {
    return (
      <StyledHeader>
        <TextField
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={styles.icon} />
              </InputAdornment>
            ),
            classes: {
              input: css`
                padding: 8px 0 7px 10px !important;
              `
            }
          }}
        />
      </StyledHeader>
    );
  }
}
