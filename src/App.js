import './App.css';
import { Routes, Route } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';

function App(props) {
  return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<GameList name="Wild-GAMES"/>} />
            <Route path="/:id" element={<GameDetails />} />
          </Routes>
        </header>
      </div>
  );
}

export default App;
