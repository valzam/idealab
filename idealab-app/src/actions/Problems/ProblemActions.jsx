import alt from '../../alt.jsx';
import request from 'superagent';
import * as config from '../../config.jsx';
import Validations from '../../validations.jsx';

class ProblemActions {
  constructor() {
    this.generateActions(
      'setActiveProblemFail',
      'setActiveProblemFailNotFound',
      'setProblemToUpdate',
      'setActiveProblemSuccess',
      'deleteProblemSuccess',
      'deleteProblemFail',
      'updateProblemSuccess',
      'updateProblemFail',
      'setUpdateProblemState',
      'updateName',
      'updateText'
    );
  }
  setActiveProblem(_id,history) {
    request
    .get(config.API + '/problems/' + _id)
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.setActiveProblemFail(history);
      }

      if (res.status === 204) {
        this.actions.setActiveProblemFailNotFound(history);
      }
      this.actions.setActiveProblemSuccess(res.body.problem);
    });
  }

  deleteProblem(_id,history) {
    request
    .del(config.API + '/problems/' + _id)
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.deleteProblemFail();
      }

      this.actions.deleteProblemSuccess(history);
    });
  }

  updateProblem(updatedProblem,history) {
    request
    .put(config.API + '/problems/' +updatedProblem._id)
    .send(updatedProblem)
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.updateProblemFail();
      }

      this.actions.updateProblemSuccess(res.body.problem);
    });
  }
}

export default alt.createActions(ProblemActions);
