import './App.css';

const arrayOfCommitment = ['fazer café', 'levar filho na escola', 'tomar banho']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (arrayOfCommitment.map(Task))
}
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
// }

export default App;
