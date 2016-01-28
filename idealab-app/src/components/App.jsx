import React from 'react';
import AuthStore from '../stores/AuthStore.jsx';

// Components
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = AuthStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    AuthStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.unlisten(this.onChange);
  }

  render() {
    return (
      this.state.authenticated ? <AppAuthenticated history={this.props.history} children={this.props.children}/> : <AppAnon history={this.props.history} children={this.props.children} authenticated={this.state.authenticated}/>
    );
  }
}

class AppAuthenticated extends React.Component {
  constructor(props){
    super(props);
    this.state = AuthStore.getState();

  }

  render() {
    return (
      <div>
        <Navbar history={this.props.history} user={this.state.user}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 col-md-1 sidebar">
              <Sidebar history={this.props.history} user={this.state.user} />
            </div>
            <div className="col-sm-10 col-md-11 content">
              <div className="container-fluid">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AppAnon extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
