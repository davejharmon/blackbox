import { useState } from 'react';
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
import useGameUpdater from './hooks/useGameUpdater';

export const BbOs = () => {
  const [gamePhase, setGamePhase] = useState('pregame');
  const [gameIsPaused, setGameIsPaused] = useState(false);
  const missionState = useGameUpdater(gameIsPaused);
  const gameStartModal = {
    msg: ['+++ ERROR +++ SHIPBOARD AI OFFLINE +++'],
    userOptions: [
      {
        label: 'Engage manual override',
        callback: () => {
          setGamePhase('tutorial');
        },
      },
    ],
  };

  return (
    <div className={classes.osWindow}>
      {gamePhase === 'pregame' && (
        <Modal constructor={gameStartModal} setPause={setGameIsPaused} />
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
