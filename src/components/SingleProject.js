import React from 'react';
import './Project.css';
import ProjectProcess from './Projects'

class SingleProject extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div className="singleProject">
        {this.props.title}
        <ProjectProcess propcess="進行中"/>
      </div>
    );
  }
}

export default SingleProject;
