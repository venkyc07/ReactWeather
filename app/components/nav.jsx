var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function (){
//     return (
//       <div>
//         <h2>navigation Component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><br/>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link><br/>
//         <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
//
//       <a href="#/about">Go To About</a>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div>
      <h2>navigation Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><br/>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link><br/>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>

    <a href="#/about">Go To About</a>
    </div>
  )
};
module.exports=Nav;
