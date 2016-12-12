var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var MyComponentClass = React.createClass({
  render: function () {
    return (
        <div>
        <App />
        <h1>This is another React component that works! I'm from the index.js file!</h1>
        </div>
    );
  }
});

ReactDOM.render(
  <MyComponentClass />,
  document.body
);



