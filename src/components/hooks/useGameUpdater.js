import { useState, useEffect, useContext } from 'react';
import { FUEL_DECAY_RATE } from '../../constants/config';
import { MissionContext } from '../../context/mission-context';

const useGameUpdater = isPaused => {
  const [count, setCount] = useState(0);
  const ctx = useContext(MissionContext);
  const { consumeFuel } = ctx;
  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        if (count % FUEL_DECAY_RATE === 0) consumeFuel();
      }, 100);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count, consumeFuel, isPaused]);
};

export default useGameUpdater;
