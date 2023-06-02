import { createContext, useState } from 'react';
export const GameContext = createContext({
  isPaused: false,
  pause: () => {},
  unpause: () => {},
  phase: 'pregame',
  updatePhase: () => {},
});

export const GameContextProvider = props => {
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState('pregame');

  return (
    <GameContext.Provider
      value={{
        isPaused,
        setIsPaused,
        phase,
        setPhase,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
