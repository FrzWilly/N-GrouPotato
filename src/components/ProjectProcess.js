import React from 'react';
import '../components/Project.css';

class ProjectProcess extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div className="ProjectProcess">
        {this.props.process}
      </div>
    );
  }
}

export default ProjectProcess;
