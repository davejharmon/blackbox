import { createContext, useState } from 'react';
export const GameContext = createContext({
  isPaused: false,
  setIsPaused: () => {},
  phase: 'pregame',
  setPhase: () => {},
});

export const GameContextProvider = props => {
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState('pregame');
  const [fuel, setFuel] = useState(77.2);
  const [fuelCarts, setFuelCarts] = useState(8);
  return (
    <GameContext.Provider
      value={{
        isPaused,
        setIsPaused,
        phase,
        setPhase,
        fuel,
        setFuel,
        fuelCarts,
        setFuelCarts,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
