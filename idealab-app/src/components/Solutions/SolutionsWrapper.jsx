import React from 'react';

class SolutionsWrapper extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      this.props.children
    );
  }
}

export default SolutionsWrapper;
