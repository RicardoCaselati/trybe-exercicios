import './App.css';
import React from 'react';
import Card from './Card';
import Pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div>

        {
          Pokemons.map((item) => {
            return <Card name={item.name} type={item.type} image={item.image} averageWeight={item.averageWeight.value} />
          })
        }
      </div>
    );
  }
}

export default App;


