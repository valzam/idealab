import React from 'react';
import {Link} from 'react-router';
import SolutionStore from '../../stores/Solutions/SolutionStore.jsx';
import SolutionActions from '../../actions/Solutions/SolutionActions.jsx';

class Solution extends React.Component {
  constructor(props){
    super(props);
    this.state = SolutionStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SolutionStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SolutionStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render(){
    return (
      this.state.updateSolution ? <UpdateSolution history={this.props.history} params={this.props.params}/> : <ViewSolution history={this.props.history} params={this.props.params}/>
    );
  }
}

class ViewSolution extends React.Component {
  constructor(props){
    super(props);
    this.state = SolutionStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SolutionStore.listen(this.onChange);
    SolutionActions.setActiveSolution(this.props.params._id,this.props.history);
  }

  componentWillUnmount() {
    SolutionStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  updateSolution(e){
    e.preventDefault();
    SolutionActions.setUpdateSolutionState(true);
  }

  render(){
    return (
      <div className="row">
        <div className="col-sm-9">
          <h2>{this.state.activeSolution.name}</h2>
        </div>
        <div className="col-sm-3">
          <nav>
            <ul className="pager pull-right">
              <li><Link to="/solutions"><span className="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span> Go to overview</Link></li>
              <li className="pointer update">
                <Link to="" onClick={this.updateSolution.bind(this)}><span className="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-12">
          <div className="well">
            {this.state.activeSolution.text}
          </div>
        </div>
      </div>
    );
  }
}

class UpdateSolution extends React.Component {
  constructor(props){
    super(props);
    this.state = SolutionStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SolutionStore.listen(this.onChange);
    SolutionActions.setSolutionToUpdate();
  }

  componentWillUnmount() {
    SolutionStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  deleteSolution(e){
    e.preventDefault();
    SolutionActions.deleteSolution(this.state.activeSolution._id,this.props.history);
  }

  updateSolution(e){
    e.preventDefault();
    SolutionActions.setUpdateSolutionState(false);
  }

  handleSubmit(e){
    e.preventDefault();
    SolutionActions.updateSolution(this.state.solutionToUpdate,this.props.history);

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
              value={this.state.solutionToUpdate.name}
              placeholder=""
              onChange={SolutionActions.updateName} />
          </div>
        </div>
        <div className="col-sm-3">
          <nav>
            <ul className="pager pull-right">
              <li>
                <Link to=""  onClick={this.updateSolution.bind(this)}>
                  <span className="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span> Cancel Update</Link></li>
              <li className="pointer delete">
                <Link to="" onClick={this.deleteSolution.bind(this)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              rows="10"
              className="form-control"
              value={this.state.solutionToUpdate.text}
              placeholder=""
              onChange={SolutionActions.updateText}/><div className="form-group">
            </div>
          </div>
          <button
            className="btn btn-success btn-lg pull-right"
            type="submit">
            Update Solution
          </button>
        </div>

        </form>
      </div>
    );
  }
}


export default Solution;
