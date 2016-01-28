import alt from '../../alt.jsx';
import SolutionsListActions from '../../actions/Solutions/SolutionsListActions.jsx';

class SolutionsListStore {
  constructor() {
    this.bindActions(SolutionsListActions);

    this.solutionsList = [];
  }

  onGetSolutionsListSuccess(solutions){
    this.solutionsList = solutions || [];
  }

}

export default alt.createStore(SolutionsListStore);
