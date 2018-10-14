import React from 'react';
import styled from 'react-emotion';
import Header from './Header';
import Section from './Section';
import shuffle from 'lodash/shuffle';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const StyledChannel = styled('div')`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100vh;
  background: #555555;
  color: #efefef;
`;

const TMP_LIST = [
  { name: 'Iron man' },
  { name: 'Spider man' },
  { name: 'Superman' },
  { name: 'Super Mario' },
  { name: 'Nanuto' }
];

export default class Channel extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <StyledChannel>
          <Header />
          <Section title="Recent" members={TMP_LIST} first={true} />
          <Section title="Starred" members={shuffle(TMP_LIST)} />
          <Section members={shuffle([...TMP_LIST, ...TMP_LIST, ...TMP_LIST])} />
        </StyledChannel>
      </MuiThemeProvider>
    );
  }
}
