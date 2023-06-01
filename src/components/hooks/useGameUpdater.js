import { useState, useEffect } from 'react';

const useGameUpdater = isPaused => {
  const [missionState, setMissionState] = useState({
    missionElapsedTime: [100, 200, 300], // hours, minutes, seconds
    heading: [40, 5, -20], // Hx, Hy, Hz
    velocity: [0.8, 0.1, -0.6], // Vx, Vy, Vz
    lifeSupportSystem: 99.8, // percentage
    fuel: 70.2, // percentage
  });

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setMissionState(prevState => ({
          ...prevState,
          fuel: prevState.fuel - 0.01,
          missionElapsedTime: [
            prevState.missionElapsedTime[0],
            prevState.missionElapsedTime[1],
            prevState.missionElapsedTime[2] + 1,
          ],
        }));
      }, 100);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused]);

  return missionState;
};

export default useGameUpdater;
