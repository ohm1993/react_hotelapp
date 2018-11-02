var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Login = require('Login');
var Shownearhotels = require('Shownearhotels');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
 <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="login" component={Login}/>
      <Route path="shownearbyhotels" component={Shownearhotels}/>
      <IndexRoute component={Login}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
