import alt from '../alt.jsx';
import ProfileActions from '../actions/ProfileActions.jsx';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.profile = {};
    this.email = "";
    this.newPassword = "";
    this.oldPassword = "";
  }

  onSetupUser(user){
    this.profile = user.profile[0];
    this.email = user.email;
  }

  onUpdateName(e){
    this.profile.name = e.target.value;
  }
  onUpdateEmail(e){
    this.email = e.target.value;
  }
  onUpdateNewPassword(e){
    this.newPassword = e.target.value;
  }
  onUpdateOldPassword(e){
    this.oldPassword = e.target.value;
  }
}

export default alt.createStore(ProfileStore);
