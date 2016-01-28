import React from 'react';
import AuthStore from '../stores/AuthStore.jsx';
import { History } from 'react-router';


function AuthWrapper(Component) {
  return React.createClass({
    mixins: [ History ],

    getInitialState: function() {
    return AuthStore.getState();
    },

    componentDidMount: function() {
      AuthStore.listen(this.onChange);

      if (!this.state.authenticated) {
        this.props.history.pushState(null, '/login');
      }
    },

    componentWillUnmount: function() {
      AuthStore.unlisten(this.onChange);
    },

    onChange: function(state){
      this.setState(state);
    },

    render() {
      return <Component {...this.props} history={this.history} user={this.state.user}/>;
    }
  });
}

export default AuthWrapper;
