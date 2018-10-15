import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'emotion';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-ibm-plex-sans';

injectGlobal`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    min-width: 768px;
    overflow: hidden;
    font-family: IBMPlexSans, "Helvetica Neue", "Segoe UI", Helvetica, Verdana, Arial, sans-serif;
  }

  ::-webkit-scrollbar {
      width: 8px;
  }

  ::-webkit-scrollbar-track {
      background: #555555;
  }

  ::-webkit-scrollbar-thumb {
      background: #888888;
  }
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
