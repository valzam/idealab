import React from 'react';
import {Link} from 'react-router';
import addSolutionStore from '../../stores/Solutions/addSolutionStore.jsx';
import addSolutionActions from '../../actions/Solutions/addSolutionActions.jsx';

class addSolution extends React.Component {
  constructor(props){
    super(props);
    this.state = addSolutionStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    addSolutionStore.listen(this.onChange);
  }

  componentWillUnmount() {
    addSolutionStore.unlisten(this.onChange);
  }

  handleSubmit(e){
    e.preventDefault();
    const name = this.state.name;
    const text = this.state.text;

    addSolutionActions.addSolution(name,text,this.props.history);
  }

  render(){
    return (
      <div className="row">
        <div className="col-sm-9">
          <h2>Create a new Solution Description</h2>
        </div>
        <div className="col-sm-3">
          <nav>
            <ul className="pager pull-right">
              <li className="cancel"><Link to="/solutions"><span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> Cancel</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div className={'form-group ' + this.state.nameValidationState}>
                <label className="control-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  placeholder=""
                  onChange={addSolutionActions.updateName} />
                <p className="help-block">{this.state.nameValidationMessage}</p>
              </div>

              <div className={'form-group ' + this.state.textValidationState}>
                <label className="control-label">Description</label>
                <textarea
                  rows="10"
                  className="form-control"
                  value={this.state.text}
                  placeholder=""
                  onChange={addSolutionActions.updateText}/>
                <p className="help-block">{this.state.textValidationMessage}</p>
              </div>

            <button
              className="btn btn-success btn-lg pull-right"
              type="submit">
              Create Solution
            </button>
          </form>
        </div>
      </div>
      );
  }
}


export default addSolution;
