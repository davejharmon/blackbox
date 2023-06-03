import { useContext } from 'react';
import classes from './StatusIndicators.module.css';
import { BarIndicator } from './UI/BarIndicator';
import { MissionContext } from '../context/mission-context';
export const StatusIndicators = () => {
  const ctx = useContext(MissionContext);
  return (
    <div className={classes.bars}>
      <BarIndicator val={ctx.fuel} label={'fuel'} max={100} />
      <BarIndicator val={ctx.fuelCarts} label={'carts'} max={10} />
    </div>
  );
};
