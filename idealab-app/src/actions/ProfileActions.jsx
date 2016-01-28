import alt from '../alt.jsx';
import {assign} from 'underscore';

class ProfileActions {
  constructor() {
    this.generateActions(
        'setupUser',
        'updateName',
        'updateEmail',
        'updateNewPassword',
        'updateOldPassword'
    );
  }

}

export default alt.createActions(ProfileActions);
