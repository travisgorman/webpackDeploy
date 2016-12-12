import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FirstClass from './components/App';

document.getElementById('app').innerHTML = "the app is working";

const MyComponentClass = React.createClass({
  render: function () {
    return (
        <div>
          <FirstClass />
          <h1>It Works! I'm from the index.js file!</h1>
        </div>
    );
  }
});

ReactDOM.render(
  <MyComponentClass />, 
  document.getElementById('page')
);


