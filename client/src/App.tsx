import * as React from "react";

import gql from "graphql-tag";
import "./App.css";

import logo from "./logo.svg";

import { client } from './apollo';

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
