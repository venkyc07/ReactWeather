var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return(
//       <h2>About Component</h2>
//     );
//   }
// });

var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>Welcome to about page...! this is the sample page .
      This is Weather application build on React.
       I have built this for the complete React web app  Developer course. </p>
     <p>
       Here are the some of the tools I used:
     </p>
     <ul>
       <li>
         <a href="https://facebook.github.io/react">React</a> - This was the
           Javascript framework used.
       </li>
       <li>
         <a href="http://openweathermap.org">Open Weather Map</a>  - I used open Weather map
           to search for weather data by city name.
       </li>
     </ul>
    </div>
  )
};
module.exports = About;
