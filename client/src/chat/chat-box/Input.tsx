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
  createMessage?: (text: string) => void;
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
      if (this.props.createMessage) {
        this.props.createMessage(this.state.text);
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

const userId = 'cjniaf5jf4vss0b947fugj2dl';
const channelId = 'cjnikuku45t1z0b9455muu2t2';
const ADD_MESSAGES_MUTATION = gql`
  mutation createMessage($text: String!, $userId: ID!, $channelId: ID!) {
    createMessage(text: $text, userId: $userId, channelId: $channelId) {
      id
      text
    }
  }
`;

export const Input = () => (
  <Mutation mutation={ADD_MESSAGES_MUTATION}>
    {createMessage => (
      <InputComponent
        createMessage={(text: string) =>
          createMessage({ variables: { text, userId, channelId } })}
      />
    )}
  </Mutation>
);
