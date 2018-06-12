import React from 'react';

class Campaigns extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>{`mah campaigns ${this.props.match.params.userId}`}</div>)
  }

}

export default Campaigns;
