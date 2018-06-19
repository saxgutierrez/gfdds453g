import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {App, Page1, Page2, NotFound} from './App';
import './index.css';

class Index extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute path="/page1" component={Page1} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
