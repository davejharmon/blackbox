import { createContext, useState } from 'react';
import {
  FUEL_CARTRIDGE_SIZE,
  STARTING_ELAPSED_TIME,
  STARTING_FUEL,
  STARTING_FUEL_CARTS,
} from '../constants/config';
export const MissionContext = createContext({
  fuel: 100, // in pecentage
  fuelCarts: 10,
  lifeSupportSystem: 98,
  clearance: 0,
  getMET: () => {},
  consumeFuel: () => {},
  refuel: () => {},
  ramstack: [],
  reset: () => {},
});

export const MissionContextProvider = props => {
  const [fuel, setFuel] = useState(STARTING_FUEL);
  const [fuelCarts, setFuelCarts] = useState(STARTING_FUEL_CARTS);
  const [lifeSupportSystem] = useState(98);
  const [clearance, setClearance] = useState(0);

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

  const refuel = qty => {
    console.log(`carts:${fuelCarts}, qty ${1}`);
    // check fuel available
    setFuelCarts(fuelCarts - qty);
    const addedFuel = FUEL_CARTRIDGE_SIZE * qty;
    setFuel(prev => (prev + addedFuel < 100 ? prev + addedFuel : 100));
    return `Loading ${qty} fuel cartridge${qty > 1 ? 's' : ''}. ${
      fuelCarts - qty
    } remaining.`;
  };

  const reset = () => {
    setFuel(STARTING_FUEL);
    setFuelCarts(STARTING_FUEL_CARTS);
    setClearance(0);
  };
  return (
    <MissionContext.Provider
      value={{
        fuel,
        fuelCarts,
        getMET,
        consumeFuel,
        refuel,
        lifeSupportSystem,
        clearance,
        reset,
      }}
    >
      {props.children}
    </MissionContext.Provider>
  );
};
