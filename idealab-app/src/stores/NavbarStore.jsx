import alt from '../alt.jsx';
import NavbarActions from '../actions/NavbarActions.jsx';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
  }

}

export default alt.createStore(NavbarStore);
