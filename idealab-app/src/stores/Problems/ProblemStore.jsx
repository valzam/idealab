import alt from '../../alt.jsx';
import ProblemActions from '../../actions/Problems/ProblemActions.jsx';

class ProblemStore {
  constructor() {
    this.bindActions(ProblemActions);
    this.activeProblem = {};
    this.problemToUpdate = {};
    this.updateProblem = false;
  }

  onSetActiveProblemSuccess(problem){
    this.activeProblem = problem;
  }

  onSetActiveProblemFail(history){
    toastr.error('Something went wrong');
    history.pushState(null,'/problems');
  }

  onSetProblemToUpdate(){
    this.problemToUpdate = {
      _id:this.activeProblem._id,
      name:this.activeProblem.name,
      text:this.activeProblem.text
    };
  }

  onSetActiveProblemFailNotFound(history){
    toastr.error('This problem does not exist anymore');
    history.pushState(null,'/problems');
  }

  onDeleteProblemSuccess(history){
    toastr.success('Problem deleted');
    history.pushState(null,'/problems');
  }

  onDeleteProblemFail(){
    toastr.success('Problem deleted');
  }

  onSetUpdateProblemState(update){
    this.updateProblem = update;
  }

  onUpdateName(e){
    this.problemToUpdate.name = e.target.value;
  }

  onUpdateText(e){
    this.problemToUpdate.text = e.target.value;
  }

  onUpdateProblemSuccess(problem){
    this.updateProblem = false;
    this.activeProblem = problem;
    toastr.success('Problem updated');
  }

  onUpdateProblemFail(){
    toastr.success('Something went wrong');
  }
}

export default alt.createStore(ProblemStore);
