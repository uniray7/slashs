import React from 'react';
import gql from 'graphql-tag';
import styled, { css } from 'react-emotion';
import TextField from '@material-ui/core/TextField';
import { Mutation } from 'react-apollo';

const StyledInput = styled('div')`
  display: flex;
  margin: 20px;
  border-top: 1px solid #e0e0e0;
`;

interface InputState {
  text: string;
}

interface InputProps {
  addMessage?: (text: string) => void;
}

export class InputComponent extends React.PureComponent<
  InputProps,
  InputState
> {
  state: InputState = {
    text: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.props.addMessage) {
        this.props.addMessage(this.state.text);
      }
      this.setState({ text: '' });
    }
  };

  handleKeyEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && e.metaKey) {
      e.preventDefault();
      this.setState(({ text }) => ({ text: `${text}${'\n'}` }));
    }
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
          onKeyDown={this.handleKeyEnter}
          onKeyPress={this.handleKeyPress}
          margin="normal"
          variant="outlined"
          fullWidth={true}
          InputProps={{
            className: css`
              padding: 12px 10px 10px !important;
            `
          }}
        />
      </StyledInput>
    );
  }
}

const ADD_MESSAGES_MUTATION = gql`
  mutation addMessage($text: String!) {
    addMessage(text: $text) {
      id
      text
    }
  }
`;

export const Input = () => (
  <Mutation mutation={ADD_MESSAGES_MUTATION}>
    {addMessage => (
      <InputComponent
        addMessage={(text: string) => addMessage({ variables: { text } })}
      />
    )}
  </Mutation>
);
