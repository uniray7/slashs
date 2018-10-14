import React from 'react';
import styled, { css } from 'react-emotion';
import TextField from '@material-ui/core/TextField';

const StyledInput = styled('div')`
  display: flex;
  margin: 20px;
  border-top: 1px solid #e0e0e0;
`;


export default class Input extends React.PureComponent {
  state = {
    text: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <StyledInput>
        <TextField
          placeholder="Message"
          multiline={true}
          rowsMax="10"
          value={this.state.text}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          fullWidth={true}
          InputProps={{
            className: css`padding: 12px 10px 10px !important;`
          }}
        />
      </StyledInput>
    );
  }
}
