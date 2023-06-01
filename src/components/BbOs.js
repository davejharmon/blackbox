import { useEffect, useState } from 'react';
import classes from './BbOs.module.css';
import { Console } from './Console';
import { Logo } from './Logo';
import { MissionOverview } from './MissionOverview';
import { Motd } from './Motd';
import { Ramstack } from './Ramstack';
import { Scroller } from './Scroller';
import { StatusIndicators } from './StatusIndicators';
import { Visualiser } from './Visualiser';
import { Modal } from './Modal';

export const BbOs = () => {
  const [missionState, setMissionState] = useState({
    missionElapsedTime: [100, 200, 300], // hours, minutes, seconds
    heading: [40, 5, -20], // Hx, Hy, Hz
    velocity: [0.8, 0.1, -0.6], // Vx, Vy, Vz
    lifeSupportSystem: 99.8, // percentage
    fuel: 70.2, // percentage
  });

  const [gamePhase, setGamePhase] = useState('pregame');
  const [gameIsPaused, setGameIsPaused] = useState(false);

  const gameStartModal = {
    msg: [
      '+++ ERROR +++ SHIPBOARD AI OFFLINE +++',
      'Press any key to resume duties',
    ],
    userOptions: [
      {
        label: 'OK',
        callback: () => {
          setGamePhase('tutorial');
        },
      },
    ],
  };

  useEffect(() => {
    const gameTicker = setInterval(() => {
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
    return () => clearInterval(gameTicker); // cleanup
  }, []);
  return (
    <div className={classes.osWindow}>
      {gamePhase === 'pregame' && (
        <Modal
          constructor={gameStartModal}
          getPause={gameIsPaused}
          setPause={setGameIsPaused}
        />
      )}
      <div className={classes.leftBar}>
        {gameIsPaused && <div>GAME PAUSED</div>}
        <Logo />
        <Motd />
        <StatusIndicators />
      </div>
      <div className={classes.main}>
        <Scroller />
        <h4 className={classes.consoleHeader}>CONSOLE</h4>
        <Console gameIsPaused={gameIsPaused} />
        <h4 className={classes.visualiserHeader}>VISUALISER</h4>
        <Visualiser />
      </div>
      <div className={classes.rightBar}>
        <MissionOverview missionState={missionState} />
        <Ramstack />
      </div>
    </div>
  );
};
