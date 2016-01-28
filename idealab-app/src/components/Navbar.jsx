import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore.jsx';
import NavbarActions from '../actions/NavbarActions.jsx';
import AuthActions from '../actions/AuthActions.jsx';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  onClickLogout(e){
    e.preventDefault();
    AuthActions.logout();
  }

  render(){
    return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Idealab</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className={this.props.history.isActive('/settings') ? "active" : ""}><Link to="/settings">
              <span className="glyphicon glyphicon glyphicon-cog" aria-hidden="true"></span>
              </Link></li>
            <li onClick={this.onClickLogout}>
              <a><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}


export default Navbar;
