import './App.css';
import { Scanlines } from './components/Scanlines';
import { Game } from './components/Game';
import { GameContextProvider } from './context/game-context';
import { MissionContextProvider } from './context/mission-context';
import { DbContextProvider } from './context/db-context';

function App() {
  return (
    <div className="App">
      <Scanlines />
      <GameContextProvider>
        <MissionContextProvider>
          <DbContextProvider>
            <Game />
          </DbContextProvider>
        </MissionContextProvider>
      </GameContextProvider>
    </div>
  );
}

export default App;
