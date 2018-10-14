import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import styled from 'react-emotion';

import { client } from './apollo';
import { Navigation } from './navigation';
import { Chat } from './chat';

const StyledApp = styled('div')`
  display: flex;
`;
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <StyledApp className="App">
          <Navigation />
          <Chat />
        </StyledApp>
      </ApolloProvider>
    );
  }
}

export default App;
