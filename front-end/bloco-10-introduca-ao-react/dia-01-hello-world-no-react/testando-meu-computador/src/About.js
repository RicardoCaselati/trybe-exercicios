import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
        <h1>Ricardo Caselati</h1>
        <p>Sou um cara legal</p>
      </div>
    )
  }
}

export default About

// import React from 'react';
// import ReactDOM from 'react-dom';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// export default tick