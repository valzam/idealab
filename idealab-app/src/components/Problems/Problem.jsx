import React from 'react';
import {Link} from 'react-router';
import ProblemStore from '../../stores/Problems/ProblemStore.jsx';
import ProblemActions from '../../actions/Problems/ProblemActions.jsx';

class Problem extends React.Component {
  constructor(props){
    super(props);
    this.state = ProblemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProblemStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ProblemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render(){
    return (
      this.state.updateProblem ? <UpdateProblem history={this.props.history} params={this.props.params}/> : <ViewProblem history={this.props.history} params={this.props.params}/>
    );
  }
}

class ViewProblem extends React.Component {
  constructor(props){
    super(props);
    this.state = ProblemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProblemStore.listen(this.onChange);
    ProblemActions.setActiveProblem(this.props.params._id,this.props.history);
  }

  componentWillUnmount() {
    ProblemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  updateProblem(e){
    e.preventDefault();
    ProblemActions.setUpdateProblemState(true);
  }

  render(){
    return (
      <div className="row">
        <div className="col-sm-9">
          <h2>{this.state.activeProblem.name}</h2>
        </div>
        <div className="col-sm-3">
          <nav>
            <ul className="pager pull-right">
              <li><Link to="/problems"><span className="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span> Go to overview</Link></li>
              <li className="pointer update">
                <Link to="" onClick={this.updateProblem.bind(this)}><span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-12">
          <div className="well">
            {this.state.activeProblem.text}
          </div>
        </div>
      </div>
    );
  }
}

class UpdateProblem extends React.Component {
  constructor(props){
    super(props);
    this.state = ProblemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProblemStore.listen(this.onChange);
    ProblemActions.setProblemToUpdate();
  }

  componentWillUnmount() {
    ProblemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  deleteProblem(e){
    e.preventDefault();
    ProblemActions.deleteProblem(this.state.activeProblem._id,this.props.history);
  }

  updateProblem(e){
    e.preventDefault();
    ProblemActions.setUpdateProblemState(false);
  }

  handleSubmit(e){
    e.preventDefault();
    ProblemActions.updateProblem(this.state.problemToUpdate,this.props.history);

  }

  render(){
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="col-sm-9">
          <div className="form-group top-spacer">
            <input
              type="text"
              className="form-control"
              value={this.state.problemToUpdate.name}
              placeholder=""
              onChange={ProblemActions.updateName} />
          </div>
        </div>
        <div className="col-sm-3">
          <nav>
            <ul className="pager pull-right">
              <li>
                <Link to=""  onClick={this.updateProblem.bind(this)}>
                  <span className="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span> Cancel Update</Link></li>
              <li className="pointer delete">
                <Link to="" onClick={this.deleteProblem.bind(this)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              rows="10"
              className="form-control"
              value={this.state.problemToUpdate.text}
              placeholder=""
              onChange={ProblemActions.updateText}/><div className="form-group">
            </div>
          </div>
          <button
            className="btn btn-success btn-lg pull-right"
            type="submit">
            Update Problem
          </button>
        </div>

        </form>
      </div>
    );
  }
}


export default Problem;
