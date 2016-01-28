import React from 'react';

class ProblemsWrapper extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      this.props.children
    );
  }
}

export default ProblemsWrapper;
