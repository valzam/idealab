import React from 'react';
import {RouteHandler, Link} from 'react-router';
import AuthStore from '../stores/AuthStore.jsx';
import AuthActions from '../actions/AuthActions.jsx';

class Login extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    AuthActions.login(this.state.email,this.state.password,this.state.rememberMe);
  }

  render(){
    return (
    <div className="container">

      <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="login-wrap">
            <p className="login-img"><span className="glyphicon glyphicon-off" aria-hidden="true"></span></p>
            <div className="input-group">
              <span className="input-group-addon">@</span>
              <input type="text" className="form-control" value={this.state.email} placeholder="Email" onChange={AuthActions.updateEmail} autofocus />
            </div>
            <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></span>
                <input type="password" className="form-control" value={this.state.password} placeholder="Password" onChange={AuthActions.updatePassword}/>
            </div>
            <label className="checkbox">
                <input type="checkbox" onChange={AuthActions.updateRememberMe}/> Remember me
                <span className="pull-right"> <a href="#"> Forgot Password?</a></span>
            </label>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
            <Link to='/register'><span className="btn btn-lg btn-link btn-block" type="submit">No Account? Signup here!</span></Link>
        </div>
      </form>

    </div>
  );
  }
}

class Register extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    AuthActions.addUser(this.state.email,this.state.password,this.state.password);
  }

  render(){
    return (
    <div className="container">

      <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="login-wrap">
            <p className="login-img"><span className="glyphicon glyphicon-off" aria-hidden="true"></span></p>
            <div className="input-group">
              <span className="input-group-addon">@</span>
              <input type="text" className="form-control" value={this.state.email} placeholder="Email" onChange={AuthActions.updateEmail} autofocus />
            </div>
            <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-lock" aria-hidden="true"></span></span>
                <input type="password" className="form-control" value={this.state.password} placeholder="Password" onChange={AuthActions.updatePassword}/>
            </div>
            <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-link" aria-hidden="true"></span></span>
                <input type="password" className="form-control" value={this.state.passwordConfirm} placeholder="Password Confirmation" onChange={AuthActions.updatePasswordConfirm} />
            </div>
            <button className="btn btn-info btn-lg btn-block" type="submit">Signup</button>
            <Link to='/login'><span className="btn btn-lg btn-link btn-block" type="submit">Already registered? Login here!</span></Link>
        </div>
      </form>

    </div>
  );
  }
}


export { Login, Register};
