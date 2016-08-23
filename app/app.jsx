var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About}></Route>
        <Route path="example" component={Example}></Route>
        <IndexRoute component={Weather}/>
      </Route>
    </Router>,
    document.getElementById('app')
);
