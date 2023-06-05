import { createContext, useState } from 'react';
export const GameContext = createContext({
  isPaused: false,
  setIsPaused: () => {},
  phase: 'pregame',
  setPhase: () => {},
  visualised: null,
  visualiseFile: () => {},
  gameOver: false,
  setGameOver: () => {},
  reset: () => {},
});

export const GameContextProvider = props => {
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState('pregame');
  const [visualised, setVisualised] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const visualiseFile = file => {
    setVisualised(file);
    console.log('visualising file');
  };

  const reset = () => {
    setIsPaused(false);
    setPhase('pregame');
    setVisualised(null);
    setGameOver(false);
  };

  return (
    <GameContext.Provider
      value={{
        isPaused,
        setIsPaused,
        phase,
        setPhase,
        visualised,
        visualiseFile,
        gameOver,
        setGameOver,
        reset,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
