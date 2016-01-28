import React from 'react';
import {Link} from 'react-router';
import SolutionsListStore from '../../stores/Solutions/SolutionsListStore.jsx';
import SolutionsListActions from '../../actions/Solutions/SolutionsListActions.jsx';

// UI Components
import {Panel} from 'react-bootstrap';

class SolutionsList extends React.Component {
  constructor(props){
    super(props);
    this.state = SolutionsListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    SolutionsListStore.listen(this.onChange);

    SolutionsListActions.getSolutionsList();
  }

  componentWillUnmount() {
    SolutionsListStore.unlisten(this.onChange);
  }

  render(){
    let list = this.state.solutionsList.map((solution,index) => {
      return <SolutionsListItem name={solution.name} text={solution.text} _id={solution._id} key={solution._id}/>;
    });
    return (
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h2>Solutions you offer</h2>
          </div>
          <div className="col-sm-12 col-md-4">
            <nav>
              <ul className="pager">
                <li className="next create">
                  <Link to="/solutions/create">Create a new solution <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  </Link></li>
              </ul>
            </nav>
          </div>
          {list}
      </div>
    );
  }
}

class SolutionsListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-sm-12">
        <Link to={'/solutions/' + this.props._id}>
      <Panel className="pointer bigger-text">
        {this.props.name}
      </Panel>
    </Link>
      </div>

    );
  }
}




export default SolutionsList;
