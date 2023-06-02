import { useContext } from 'react';
import classes from './MissionOverview.module.css';
import { MissionContext } from '../context/mission-context';
export const MissionOverview = () => {
  const ctx = useContext(MissionContext);
  return (
    <div className={classes.missionOverview}>
      <h4>MISSION OVERVIEW</h4>
      <div>
        <div>Vessel:</div>
        <div>CERES-class light scout</div>
        <div>MET:</div>
        <div>{ctx.getMET()}</div>
        <div>Head:</div>
        <div>{`(40 km/s, 5 km/s, -20 km/s)`}</div>
        <div>Vel:</div>
        <div>{`(0.8 i) + (0.1 j) + (-0/6 k)`}</div>
        <div>LSS:</div>
        <div>99.8%</div>
        <div>Fuel:</div>
        <div>{ctx.fuel.toFixed(1)}%</div>
      </div>
    </div>
  );
};
