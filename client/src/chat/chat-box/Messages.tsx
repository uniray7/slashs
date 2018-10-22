import React from 'react';
import gql from 'graphql-tag';
import styled from 'react-emotion';
import Message from './Message';
import { Query } from 'react-apollo';

const StyledMessages = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
`;

interface MessageProps {
  messages: [{ id: number; text: string; avatar?: string }];
  subscribeToNewMessage: () => void;
}

export class MessagesComponent extends React.PureComponent<MessageProps> {
  containerRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (this.props.subscribeToNewMessage) {
      this.props.subscribeToNewMessage();
    }
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.containerRef.current!.scrollIntoView();
  }

  render() {
    const { messages } = this.props;
    return (
      <StyledMessages>
        {messages.map(msg => (
          <Message key={msg.id} avator={msg.avatar} text={msg.text} />
        ))}
        <div ref={this.containerRef} />
      </StyledMessages>
    );
  }
}

const channelId = 'cjnikuku45t1z0b9455muu2t2';

const MESSAGES_QUERY = gql`
  query channel($id: ID!) {
    channel(id: $id) {
      messages {
        id
        text
      }
    }
  }
`;

const MESSAGES_SUBSCRIPTION = gql`
  subscription messageCreated {
    messageCreated {
      id
      text
      __typename
    }
  }
`;

export const Messages = () => (
  <Query query={MESSAGES_QUERY} variables={{ id: channelId }}>
    {({ loading, error, data, subscribeToMore }) => {
      if (loading || error) return null;
      return (
        <MessagesComponent
          messages={data.channel.messages || []}
          subscribeToNewMessage={() => {
            subscribeToMore({
              document: MESSAGES_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newMessage = subscriptionData.data.messageCreated;

                return {
                  channel: {
                    ...prev.channel,
                    messages: [...prev.channel.messages, newMessage]
                  }
                };
              }
            });
          }}
        />
      );
    }}
  </Query>
);
