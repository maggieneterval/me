import React from 'react';
import { Col, Card, Pill, Glyph } from 'elemental';
import '../../node_modules/elemental/less/elemental.less';

export default class Project extends React.Component {
  render () {
    const { project } = this.props;
    return (
      <Col md="1/2" lg="1/3">
        <Card>
          <h2>
            <a target="_blank" href={project.deployed ? project.deployed : project.github}>{project.title}</a>
          </h2>
          <div>
            {project.github && <a href={project.github}><Glyph icon='mark-github' type='muted'/></a>}<span> </span>
            {project.deployed && <a href={project.deployed}><Glyph icon='device-desktop' type='muted'/></a>}
          </div>
          <div>
            {project.img &&  <a target="_blank" href={project.deployed ? project.deployed : project.github}><img src={project.img} /></a>}
            {project.video && <div dangerouslySetInnerHTML={{__html: project.video}}></div>}
          </div>
          <div>
            <p>{project.description}</p>
            {project.technologies && project.technologies.map((tech, idx) => <Pill key={idx} type="primary" label={tech}/>)}
          </div>
        </Card>
      </Col>
    );
  }
}
