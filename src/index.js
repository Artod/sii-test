import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/** TODO:
  \/replace # and @
  \/add new column
    \/popup
  \/design
  \/typeProps

  \/settings webpack and build
  \/hosting

  \/github and description

  ?Errors (conn refused, limit exceed)
  ?flask

  questions
*/

// git subtree push --prefix server heroku master
