import { useState, useEffect, useContext } from 'react';
import { FUEL_DECAY_RATE } from '../../constants/config';
import { MissionContext } from '../../context/mission-context';
import { GameContext } from '../../context/game-context';

const useGameUpdater = isPaused => {
  const [count, setCount] = useState(0);
  const { fuel, consumeFuel } = useContext(MissionContext);
  const { setGameOver } = useContext(GameContext);
  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        if (count % FUEL_DECAY_RATE === 0) consumeFuel();
      }, 100);
      if (fuel <= 0) setGameOver(true);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count, consumeFuel, isPaused, fuel, setGameOver]);
};

export default useGameUpdater;
