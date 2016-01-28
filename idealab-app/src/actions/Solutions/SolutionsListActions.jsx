import alt from '../../alt.jsx';
import request from 'superagent';
import * as config from '../../config.jsx';
import Validations from '../../validations.jsx';

class SolutionsListActions {
  constructor() {
    this.generateActions(
      'getSolutionsListFail',
      'getSolutionsListSuccess'
    );
  }

  getSolutionsList() {
    request
    .get(config.API +'/solutions')
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.getSolutionsListFail(res);
      }
      const solutions = res.body ? res.body.solutions : [];
      this.actions.getSolutionsListSuccess(solutions);
    });
  }

}

export default alt.createActions(SolutionsListActions);
