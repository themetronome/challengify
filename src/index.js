import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ChallengeProvider } from './ChallengeContext';

import './mvp.css';

ReactDOM.render(
  <React.StrictMode>
    <ChallengeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChallengeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
