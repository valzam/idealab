import alt from '../../alt.jsx';
import SolutionActions from '../../actions/Solutions/SolutionActions.jsx';

class SolutionStore {
  constructor() {
    this.bindActions(SolutionActions);

    this.initStore();
  }

  initStore(){
    this.activeSolution = {};
    this.solutionToUpdate = {};
    this.updateSolution = false;
  }

  onSetActiveSolutionSuccess(solution){
    this.activeSolution = solution;
  }

  onSetActiveSolutionFail(history){
    toastr.error('Something went wrong');
    history.pushState(null,'/solutions');
  }

  onSetSolutionToUpdate(){
    this.solutionToUpdate = {
      _id:this.activeSolution._id,
      name:this.activeSolution.name,
      text:this.activeSolution.text
    };
  }

  onSetActiveSolutionFailNotFound(history){
    toastr.error('This solution does not exist anymore');
    history.pushState(null,'/solutions');
  }

  onDeleteSolutionSuccess(history){
    this.initStore();
    toastr.success('Solution deleted');
    history.pushState(null,'/solutions');
  }

  onDeleteSolutionFail(){
    toastr.success('Solution deleted');
  }

  onSetUpdateSolutionState(update){
    this.updateSolution = update;
  }

  onUpdateName(e){
    this.solutionToUpdate.name = e.target.value;
  }

  onUpdateText(e){
    this.solutionToUpdate.text = e.target.value;
  }

  onUpdateSolutionSuccess(solution){
    this.updateSolution = false;
    this.activeSolution = solution;
    toastr.success('Solution updated');
  }

  onUpdateSolutionFail(){
    toastr.success('Something went wrong');
  }
}

export default alt.createStore(SolutionStore);
