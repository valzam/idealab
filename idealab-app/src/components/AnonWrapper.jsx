import React from 'react';
import AuthStore from '../stores/AuthStore.jsx';
import { History } from 'react-router';


function AnonWrapper(Component) {
  return React.createClass({
    mixins: [ History ],

    getInitialState: function() {
    return AuthStore.getState();
    },
    componentDidMount() {
      if (this.state.authenticated) {
        this.props.history.pushState(null, '/');
      }
    },

    render() {
      return <Component {...this.props} history={this.history} />;
    }
  });
}

export default AnonWrapper;
