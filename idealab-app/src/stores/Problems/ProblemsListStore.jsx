import alt from '../../alt.jsx';
import ProblemsListActions from '../../actions/Problems/ProblemsListActions.jsx';

class ProblemsListStore {
  constructor() {
    this.bindActions(ProblemsListActions);

    this.problemsList = [];
  }

  onGetProblemsListSuccess(problems){
    this.problemsList = problems || [];
  }

}

export default alt.createStore(ProblemsListStore);
