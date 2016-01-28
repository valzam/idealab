import alt from '../alt.jsx';
import NotificationsActions from '../actions/NotificationsActions.jsx';

class NotificationsStore {
  constructor() {
    this.bindActions(NotificationsActions);

  }

}

export default alt.createStore(NotificationsStore);
