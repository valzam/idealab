import alt from '../../alt.jsx';
import request from 'superagent';
import * as config from '../../config.jsx';
import Validations from '../../validations.jsx';

class ProblemsListActions {
  constructor() {
    this.generateActions(
      'getProblemsListFail',
      'getProblemsListSuccess'
    );
  }

  getProblemsList() {
    request
    .get(config.API + '/problems')
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.getProblemsListFail(res);
      }
      const problems = res.body ? res.body.problems : [];
      this.actions.getProblemsListSuccess(problems);
    });
  }

}

export default alt.createActions(ProblemsListActions);
