import React from 'react';
import Project from './Project';
import { Row } from 'elemental';
import projects from '../projects';
import '../../node_modules/elemental/less/elemental.less';

export default class Projects extends React.Component {
  constructor () {
    super();
    this.state = {
      projects: projects
    };
  }
  render () {
    return (
      <Row>
        {this.state.projects.map((project, index) => <Project key={index} project={project} />)}
      </Row>
    );
  }
}
