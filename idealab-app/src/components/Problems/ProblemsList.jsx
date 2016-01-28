import React from 'react';
import {Link} from 'react-router';
import ProblemsListStore from '../../stores/Problems/ProblemsListStore.jsx';
import ProblemsListActions from '../../actions/Problems/ProblemsListActions.jsx';
import {Panel} from 'react-bootstrap';

class ProblemsList extends React.Component {
  constructor(props){
    super(props);
    this.state = ProblemsListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    ProblemsListStore.listen(this.onChange);

    ProblemsListActions.getProblemsList();
  }

  componentWillUnmount() {
    ProblemsListStore.unlisten(this.onChange);
  }

  render(){
    let list = this.state.problemsList.map((problem,index) => {
      return <ProblemsListItem name={problem.name} text={problem.text} _id={problem._id} key={problem._id}/>;
    });
    return (
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h2>Problems you need to solve</h2>
          </div>
          <div className="col-sm-12 col-md-4">
            <nav>
              <ul className="pager">
                <li className="next create">
                  <Link to="/problems/create">Create a new problem <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  </Link></li>
              </ul>
            </nav>
          </div>
          {list}
      </div>
    );
  }
}

class ProblemsListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-sm-12">
        <Link to={'/problems/' + this.props._id}>
      <Panel className="pointer bigger-text">
        {this.props.name}
      </Panel>
    </Link>
      </div>

    );
  }
}




export default ProblemsList;
