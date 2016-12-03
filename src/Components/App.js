import React from 'react';
import Nav from './Nav';
import { Row, Col } from 'elemental';
import '../../node_modules/elemental/less/elemental.less';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col>
            <p id="title">Maggie Neterval</p>
            <Nav />
            <hr />
          </Col>
        </Row>
        <Row>
          {this.props.children}
        </Row>
        <hr />
      </div>
    );
  }
}
