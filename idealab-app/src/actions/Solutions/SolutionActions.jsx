import alt from '../../alt.jsx';
import request from 'superagent';
import * as config from '../../config.jsx';
import Validations from '../../validations.jsx';

class SolutionActions {
  constructor() {
    this.generateActions(
      'setActiveSolutionFail',
      'setActiveSolutionFailNotFound',
      'setSolutionToUpdate',
      'setActiveSolutionSuccess',
      'deleteSolutionSuccess',
      'deleteSolutionFail',
      'updateSolutionSuccess',
      'updateSolutionFail',
      'setUpdateSolutionState',
      'updateName',
      'updateText'
    );
  }
  setActiveSolution(_id,history) {
    request
    .get(config.API + '/solutions/' + _id)
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.setActiveSolutionFail(history);
      }

      if (res.status === 204) {
        this.actions.setActiveSolutionFailNotFound(history);
      }

      this.actions.setActiveSolutionSuccess(res.body.solution);
    });
  }

  deleteSolution(_id,history) {
    request
    .del(config.API + '/solutions/' + _id)
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.deleteSolutionFail();
      }

      this.actions.deleteSolutionSuccess(history);
    });
  }

  updateSolution(updatedSolution,history) {
    request
    .put(config.API + '/solutions/' +updatedSolution._id)
    .send(updatedSolution)
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.updateSolutionFail();
      }

      this.actions.updateSolutionSuccess(res.body.solution);
    });
  }
}

export default alt.createActions(SolutionActions);
