import './App.css';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import pokedex from './data';

function App() {
  return (
    <div>
      <h1 className="title">Pokedex</h1>
      <Pokedex pokemons={ pokedex }/>
    </div>
  );
}

export default App;
