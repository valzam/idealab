import alt from '../../alt.jsx';
import addSolutionActions from '../../actions/Solutions/addSolutionActions.jsx';

class addSolutionStore {
  constructor() {
    this.bindActions(addSolutionActions);
    this.initStore();
  }

  initStore(){
    this.name = "";
    this.nameValidationState = "";
    this.nameValidationMessage = "";
    this.text = "";
    this.textValidationState = "";
    this.textValidationMessage = "";
  }

  onUpdateName(e){
    this.name = e.target.value;
    this.nameValidationState = "";
    this.nameValidationMessage = "";
  }

  onUpdateText(e){
    this.text = e.target.value;
    this.textValidationState = "";
    this.textValidationMessage = "";
  }

  onInvalidSolution(err){
    if (err.name) {
      this.nameValidationState = err.name.code;
      this.nameValidationMessage = err.name.message;
    }

    if (err.text) {
      this.textValidationState = err.text.code;
      this.textValidationMessage = err.text.message;
    }
  }

  onAddSolutionSuccess(payload) {
    this.initStore();
    payload.history.pushState(null,'/solutions/' + payload.solution._id);
    toastr.success('Solution created');
  }
}

export default alt.createStore(addSolutionStore);
