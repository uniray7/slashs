import * as React from "react";
import gql from "graphql-tag";
import { DocumentNode } from "graphql";
import { Query } from "react-apollo";

import Message from "./Message";

const messagesQuery: DocumentNode = gql`
  query {
    messages {
      id
      content
    }
  }
`;

class Chat extends React.Component {
  public render() {
    return (
      <Query query={messagesQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return data.messages.map((msg: any) => (
            <Message key={msg.id} content={msg.content} />
          ));
        }}
      </Query>
    );
  }
}

export default Chat;
