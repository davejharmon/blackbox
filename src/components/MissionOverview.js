import classes from './MissionOverview.module.css';
export const MissionOverview = props => {
  const { missionState } = props;
  const { missionElapsedTime, heading, velocity, lifeSupportSystem, fuel } =
    missionState;
  return (
    <div className={classes.missionOverview}>
      <h4>MISSION OVERVIEW</h4>
      <div>
        <div>Vessel:</div>
        <div>CERES-class light scout</div>
        <div>MET:</div>
        <div>{`${missionElapsedTime[0]}.${missionElapsedTime[1]}.${missionElapsedTime[2]}`}</div>
        <div>Head:</div>
        <div>
          {`(${heading[0]} km/s, ${heading[1]} km/s, ${heading[2]} km/s)`}
        </div>
        <div>Vel:</div>
        <div>
          {`(${velocity[0]} i) + (${velocity[1]} j) + (${velocity[2]} k)`}
        </div>
        <div>LSS:</div>
        <div>{lifeSupportSystem}%</div>
        <div>Fuel:</div>
        <div>{fuel.toFixed(1)}%</div>
      </div>
    </div>
  );
};
