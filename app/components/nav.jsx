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
//       <a href="#/about">Go To About</a>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menutext">React Weather App </li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><br/>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link><br/>
          </li>
          <li>
            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">

      </div>
    </div>
  )
};
module.exports=Nav;
