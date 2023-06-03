import { createContext, useState } from 'react';
export const GameContext = createContext({
  isPaused: false,
  setIsPaused: () => {},
  phase: 'pregame',
  setPhase: () => {},
  visualised: null,
  visualiseFile: () => {},
});

export const GameContextProvider = props => {
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState('pregame');
  const [visualised, setVisualised] = useState(null);
  const visualiseFile = file => {
    setVisualised(file);
    console.log('visualising file');
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
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
