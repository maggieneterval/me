import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div id="nav">
    <ul>
      <li>
        <Link activeStyle={{color: '#1385e5'}} to="projects">Projects</Link>
      </li>
      <li>
        <a href="https://drive.google.com/file/d/0B4xqz9PflLrhbFhkNzRBdXVOcEE/view?usp=sharing" target="_blank">Resume</a>
      </li>
      <li>
        <Link activeStyle={{color: '#1385e5'}} to="contact">Contact</Link>
      </li>
    </ul>
  </div>
)