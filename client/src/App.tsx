import * as React from "react";
import ApolloClient from "apollo-boost";

import gql from "graphql-tag";
import "./App.css";

import logo from "./logo.svg";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  public async componentDidMount() {
    const data = await client.query({
      query: gql`
        {
          hello
        }
      `
    });
    console.log(data);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
