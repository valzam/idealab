import React from 'react';
import { Link } from 'react-router';
import SidebarStore from '../stores/SidebarStore.jsx';
import SidebarActions from '../actions/SidebarActions.jsx';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = SidebarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  render(){
    return (
      <ul className="nav nav-sidebar">
        <li className={this.props.history.isActive('/problems') ? "active" : ""}>
          <Link to='/problems'><span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
          <br /> <span clasName="menu-item-name">Problems</span>
          </Link>
        </li>
        <li className={this.props.history.isActive('/solutions') ? "active" : ""}>
          <Link to="/solutions"><span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>
          <br /><span clasName="menu-item-name">Solutions</span>
          </Link>
          </li>
      </ul>
  );
  }

}


export default Sidebar;
