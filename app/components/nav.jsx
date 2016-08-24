var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
  onSearch: function(e) {
    e.preventDefault();
    alert('not yet wired up..!');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by city" />
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather" />
                </li>
              </ul>
            </form>
        </div>
      </div>
    );
  }
});
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

// var Nav = (props) => {
//   return (
//     <div className="top-bar">
//       <div className="top-bar-left">
//         <ul className="menu">
//           <li className="menu-text">React Weather App</li>
//           <li>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//           </li>
//           <li>
//             <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//           </li>
//           <li>
//             <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="top-bar-right">
//           <form onSubmit={this.onSearch}>
//
//           </form>
//       </div>
//     </div>
//   )
// };
module.exports=Nav;
