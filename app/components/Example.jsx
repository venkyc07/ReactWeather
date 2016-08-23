var React = require('react');
var {Link} = require('react-router');
// var Example = React.createClass({
//   render: function() {
//     return(
//       <h2>Example Component</h2>
//     );
//   }
// });

var Example = (props) => {
  return (
    <div>
      <h2 className="text-center">Example</h2>
      <p>Here re some example locations</p>
      <ol>
        <li>
          <Link to='/?location=Mumbai'>Munbai, India</Link>
        </li>
        <li>
          <Link to='/?location=Karimnagar'>Karimnagar, Telangana</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = Example;
