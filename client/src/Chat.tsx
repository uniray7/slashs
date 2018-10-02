import * as React from "react";
import gql from "graphql-tag";
import { DocumentNode } from "graphql";
import { Mutation, Query } from "react-apollo";

import InputBox from "./InputBox";
import MessagesBox from "./MessagesBox";

const messagesQuery: DocumentNode = gql`
  query {
    messages {
      id
      content
    }
  }
`;

const addMessageMutation = gql`
  mutation addMessage($message: String!) {
    addMessage(message: $message) {
      id
      content
    }
  }
`;

const messagesSubscription = gql`
  subscription messageAdded {
    messageAdded {
      id
      content
    }
  }
`;

class Chat extends React.Component {
  render() {
    return (
      <>
        <Query query={messagesQuery}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <MessagesBox
                messages={data.messages}
                subscribeToNewMessage={() => {
                  subscribeToMore({
                    document: messagesSubscription,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev;
                      const newMessage = subscriptionData.data.messageAdded;

                      return {
                        messages: [...prev.messages, newMessage],
                      }
                    }
                  });
                }}
              />
            );
          }}
        </Query>
        <Mutation mutation={addMessageMutation}>
          {addMessage => (
            <InputBox
              addMessage={(message: any) =>
                addMessage({ variables: { message } })
              }
            />
          )}
        </Mutation>
      </>
    );
  }
}

export default Chat;
