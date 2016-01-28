import alt from '../alt.jsx';
import request from 'superagent';
import * as config from '../config.jsx';

class AuthActions {
  constructor() {
    this.generateActions(
      'setAuthenticated',
      'setAuthenticatedPermanent',
      'updateEmail',
      'updatePassword',
      'updatePasswordConfirm',
      'updateRememberMe',
      'addUserSuccess',
      'addUserFail',
      'loginFail',
      'loginSuccess',
      'logout',
      'getUser'
    );
  }

  login(email,password,perm){
    if (email.length === 0) return toastr.error("Please enter an email address");
    if (password.length === 0) return toastr.error("Please enter a password");

    request
    .post(config.API + '/authenticate')
    .send({ email: email, password: password })
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (err){
        return this.actions.loginFail(res);
      }
      if (perm){
        this.actions.setAuthenticatedPermanent(res.body.token);
      } else {
        this.actions.setAuthenticated(res.body.token);
      }
      this.actions.loginSuccess();
    });
  }

  addUser(email,password,passwordConfirm) {
    if (email.length === 0) return toastr.error("Please enter an email address");
    if (password.length === 0) return toastr.error("Please enter a password");
    if (password !== passwordConfirm) return toastr.error("Password don't match");

    request
    .post(config.API + '/users')
    .send({ email: email, password: password })
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (err){
        return this.actions.addUserFail(res);
      }
      this.actions.setAuthenticated(res.body.token);
      this.actions.addUserSuccess();
    });
}
}

export default alt.createActions(AuthActions);
