import alt from '../../alt.jsx';
import request from 'superagent';
import * as config from '../../config.jsx';
import Validations from '../../validations.jsx';

class addSolutionActions {
  constructor() {
    this.generateActions(
      'updateName',
      'updateText',
      'addSolutionFail',
      'addSolutionSuccess',
      'invalidSolution'
    );
  }

  addSolution(name,text,history){
    // Valudate the inputs
    const err = Validations.solution({name,text});
    if (Object.keys(err).length !== 0) {
      return this.actions.invalidSolution(err);
    }

    request
    .post(config.API + '/solutions')
    .send({ name: name, text: text})
    .set('Content-Type', 'application/json')
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.addSolutionFail(res);
      }
      this.actions.addSolutionSuccess({solution:res.body.solution,history});
    });

  }

}

export default alt.createActions(addSolutionActions);
