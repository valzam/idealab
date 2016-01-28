import alt from '../../alt.jsx';
import request from 'superagent';
import * as config from '../../config.jsx';
import Validations from '../../validations.jsx';

class addProblemActions {
  constructor() {
    this.generateActions(
      'updateName',
      'updateText',
      'addProblemFail',
      'addProblemSuccess',
      'invalidProblem'
    );
  }

  addProblem(name,text,history){
    // Valudate the inputs
    const err = Validations.problem({name,text});
    if (Object.keys(err).length !== 0) {
      return this.actions.invalidProblem(err);
    }

    request
    .post(config.API + '/problems')
    .send({ name: name, text: text })
    .set('Content-Type', 'application/json')
    .set('Authorization','Bearer ' + config.JWT())
    .end((err, res) => {
      if (err){
        return this.actions.addProblemFail(res);
      }
      this.actions.addProblemSuccess({problem:res.body.problem,history});
    });

  }

}

export default alt.createActions(addProblemActions);
