import './App.css';
import { Scanlines } from './components/Scanlines';
import { Game } from './components/Game';
import { GameContextProvider } from './context/game-context';

function App() {
  return (
    <div className="App">
      <Scanlines />
      <GameContextProvider>
        <Game />
      </GameContextProvider>
    </div>
  );
}

export default App;
