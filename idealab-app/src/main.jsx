import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.jsx';
import AuthActions from './actions/AuthActions.jsx';

let history = createBrowserHistory();

const jwt = sessionStorage.getItem('jwt') || localStorage.getItem('jwt');
if (jwt){
  AuthActions.setAuthenticated(jwt);
}

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
