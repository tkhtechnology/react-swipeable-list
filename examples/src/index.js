import React from 'react';
import { createRoot } from 'react-dom/client';

import './App.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <div className="application">
    <div className="smartphone">
      <div className="smartphone__content">
        <App />
      </div>
    </div>
    <footer className="footer smartphone__footer">
      <span>
        {`Made with ❤️ by `}
        <a
          className="footer__link"
          href="https://sanddev.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sandstream Development
        </a>
      </span>
      <div>
        <span>
          <a
            className="footer__link"
            href="https://github.com/sandstreamdev/react-swipeable-list"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </span>
        {` • `}
        <span>
          {`License: `}
          <a
            className="footer__link"
            href="https://github.com/sandstreamdev/react-swipeable-list/blob/master/LICENSE"
            rel="noopener noreferrer"
            target="_blank"
          >
            MIT
          </a>
        </span>
      </div>
    </footer>
  </div>
);
