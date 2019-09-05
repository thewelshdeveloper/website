import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/main';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
