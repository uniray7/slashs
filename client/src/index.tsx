import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'emotion';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    min-width: 768px;
    overflow: hidden;
  }
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
