import { createContext, useState } from 'react';
import {
  FUEL_CARTRIDGE_SIZE,
  STARTING_ELAPSED_TIME,
} from '../constants/config';
export const MissionContext = createContext({
  missionElapsedTime: 4000, // in seconds
  fuel: 100, // in pecentage
  fuelCarts: 10,
  lifeSupportSystem: 98,
  clearance: 0,
  getMET: () => {},
  consumeFuel: () => {},
  refuel: () => {},
});

export const MissionContextProvider = props => {
  const [fuel, setFuel] = useState(77.2);
  const [fuelCarts, setFuelCarts] = useState(8);
  const [missionElapsedTime] = useState(4000);
  const [lifeSupportSystem] = useState(98);
  const [clearance] = useState(0);
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

  const refuel = (qty = 1) => {
    setFuelCarts(prev => prev - qty);
    const addedFuel = FUEL_CARTRIDGE_SIZE * qty;
    setFuel(prev => (prev + addedFuel < 100 ? prev + addedFuel : 100));
    return `Loading ${qty} fuel cartridge${qty > 1 ? 's' : ''}. ${
      fuelCarts - qty
    } remaining.`;
  };
  return (
    <MissionContext.Provider
      value={{
        missionElapsedTime,
        fuel,
        fuelCarts,
        getMET,
        consumeFuel,
        refuel,
        lifeSupportSystem,
        clearance,
      }}
    >
      {props.children}
    </MissionContext.Provider>
  );
};
