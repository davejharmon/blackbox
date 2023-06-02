import { createContext, useState } from 'react';
import { STARTING_ELAPSED_TIME } from '../constants/config';
export const MissionContext = createContext({
  missionElapsedTime: 4000, // in seconds
  fuel: 100, // in pecentage
  fuelCarts: 10,
  getMET: () => {},
  consumeFuel: () => {},
});

export const MissionContextProvider = props => {
  const [fuel, setFuel] = useState(77.2);
  const [fuelCarts, setFuelCarts] = useState(8);
  const [missionElapsedTime, setMissionElapsedTime] = useState(4000);

  const getMET = () => {
    const uptime = Math.floor(performance.now() / 1000) + STARTING_ELAPSED_TIME;
    const hrs = Math.floor(uptime / 3600);
    const min = Math.floor((uptime % 3600) / 60);
    const sec = uptime % 60;
    return `${String(hrs).padStart(2, '0')}.${String(min).padStart(
      2,
      '0'
    )}.${String(sec).padStart(2, '0')}`;
  };

  const consumeFuel = () => {
    setFuel(fuel - 0.1);
  };

  return (
    <MissionContext.Provider
      value={{
        missionElapsedTime,
        fuel,
        fuelCarts,
        getMET,
        consumeFuel,
      }}
    >
      {props.children}
    </MissionContext.Provider>
  );
};
