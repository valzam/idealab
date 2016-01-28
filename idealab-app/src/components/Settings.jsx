import React from 'react';
import {Link} from 'react-router';
import ProfileStore from '../stores/ProfileStore.jsx';
import ProfileActions from '../actions/ProfileActions.jsx';
import NotificationsStore from '../stores/NotificationsStore.jsx';
import NotificationsActions from '../actions/NotificationsActions.jsx';

class Settings extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Profile user={this.props.user}/>
      </div>
      <div className="col-sm-12 col-md-6">
        <Notifications user={this.props.user}/>
      </div>
    </div>
    );
  }
}

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = ProfileStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    ProfileStore.listen(this.onChange);
    if (this.props.user) ProfileActions.setupUser(this.props.user);

  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange);
  }

  handleSubmit(e) {
    e.preventDefault();
    //ProfileActions.updateUser(this.state.name, this.state.email,this.state.password);
  }

  render(){
    return (
        <form className="settings-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="settings-wrap">
           <h2>Profile</h2>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.profile.name} placeholder="Name" onChange={ProfileActions.updateName} />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="text" className="form-control" value={this.state.email} placeholder="Email" onChange={ProfileActions.updateEmail} />
              </div>
              <div className="form-group">
                <label>Old password</label>
                <input type="password" className="form-control" value={this.state.password} placeholder="Old password" onChange={ProfileActions.updateOldPassword}/>
              </div>
              <div className="form-group">
                <label>New password</label>
                <input type="password" className="form-control" value={this.state.passwordConfirm} placeholder="New Password" onChange={ProfileActions.updateNewPassword} />
              </div>
              <button className="btn btn-success btn-lg pull-right" type="submit">Update Profile</button>
          </div>
        </form>
    );
  }
}

class Notifications extends React.Component {
  constructor(props){
    super(props);
    this.state = NotificationsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    NotificationsStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NotificationsStore.unlisten(this.onChange);
  }

  handleSubmit(e) {
    e.preventDefault();
    //ProfileActions.updateUser(this.state.name, this.state.email,this.state.password);
  }

  render(){
    return (
        <form className="settings-form" onSubmit={this.handleSubmit.bind(this)}>
         <div className="settings-wrap">
           <h2>Notifications</h2>
          </div>
        </form>
    );
  }
}


export default Settings;
