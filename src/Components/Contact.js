import React from 'react';
import { Col, Row } from 'elemental';
import '../../node_modules/elemental/less/elemental.less';

export default () => (
  <Row>
    <Col sm="1/2">
      <img src='./images/mn.png' />
    </Col>
    <Col sm="1/2">
      <div id="contact">
        <h3>mneterval@gmail.com</h3>
        <h3>781-264-0406</h3>
        <a href="https://www.linkedin.com/in/mneterval"><h3>LinkedIn</h3></a>
        <a href="https://github.com/maggieneterval"><h3>GitHub</h3></a>
      </div>
    </Col>
  </Row>
);
