import alt from '../../alt.jsx';
import addProblemActions from '../../actions/Problems/addProblemActions.jsx';

class addProblemStore {
  constructor() {
    this.bindActions(addProblemActions);
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

  onInvalidProblem(err){
    if (err.name) {
      this.nameValidationState = err.name.code;
      this.nameValidationMessage = err.name.message;
    }

    if (err.text) {
      this.textValidationState = err.text.code;
      this.textValidationMessage = err.text.message;
    }
  }

  onAddProblemSuccess(payload) {
    this.initStore();
    payload.history.pushState(null,'/problems/' + payload.problem._id);
    toastr.success('Problem created');
  }
}

export default alt.createStore(addProblemStore);
