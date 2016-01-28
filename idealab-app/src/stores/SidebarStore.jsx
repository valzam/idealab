import alt from '../alt.jsx';
import SidebarActions from '../actions/SidebarActions.jsx';

class SidebarStore {
  constructor() {
    this.bindActions(SidebarActions);
  }

}

export default alt.createStore(SidebarStore);
