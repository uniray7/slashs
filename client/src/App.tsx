import * as React from "react";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import { client } from "./apollo";
import Chat from "./Chat";

import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    const data = await client.query({
      query: gql`
        {
          hello
        }
      `
    });
    console.log(data);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Chat />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
