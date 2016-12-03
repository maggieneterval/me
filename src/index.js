import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="projects" />
      <Route path="projects" component={Projects} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);

