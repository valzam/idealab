import alt from '../alt.jsx';
import AuthActions from '../actions/AuthActions.jsx';
import jwtDecode from 'jwt-decode';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.user = null;
    this.authenticated =  null;

    this.email = "";
    this.password = "";
    this.passwordConfirm = "";
    this.rememberMe = false;

    this.emailValidationState = "";
  }

  onUpdateEmail(e) {
    this.email = e.target.value;
  }

  onUpdatePassword(e) {
    this.password = e.target.value;
  }

  onUpdatePasswordConfirm(e) {
    this.passwordConfirm = e.target.value;
  }

  onUpdateRememberMe(e) {
    this.rememberMe = e.target.checked;
  }

  onAddUserSuccess() {
    // Clear inputs
    this.email = "";
    this.password = "";
    this.passwordConfirm = "";

  }

  onAddUserFail(res) {
    if (res.status === 409) this.emailValidationState = 'Email already taken';
  }

  onLoginSuccess(){

  }

  onLoginFail(res){
    if (res.status === 401) return toastr.error('Wrong password');
    if (res.status === 404) return toastr.error('Unknown email');
  }

  onSetAuthenticated(jwt) {
    const user = jwtDecode(jwt);
    sessionStorage.setItem('jwt',jwt);
    this.user = user;
    this.authenticated = jwt;
  }

  onSetAuthenticatedPermanent(jwt) {
    const user = jwtDecode(jwt);
    localStorage.setItem('jwt',jwt);
    this.user = user;
    this.authenticated = jwt;
  }

  logout(){
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('jwt');
    this.user = null;
    this.authenticated = null;

  }

  onGetUser(){
    return this.user;
  }
}

export default alt.createStore(AuthStore);
