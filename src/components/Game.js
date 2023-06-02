import { useContext } from 'react';
import classes from './Game.module.css';
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
import { GameContext } from '../context/game-context';

export const Game = () => {
  const ctx = useContext(GameContext);
  const missionState = useGameUpdater(ctx.isPaused);
  const gameStartModal = {
    msg: ['+++ ERROR +++ SHIPBOARD AI OFFLINE +++'],
    userOptions: [
      {
        label: 'Engage manual override',
        callback: () => {
          ctx.setPhase('tutorial');
        },
      },
    ],
  };
  return (
    <div className={classes.osWindow}>
      {ctx.phase === 'pregame' && <Modal constructor={gameStartModal} />}
      <div className={classes.leftBar}>
        {ctx.isPaused && <div>GAME PAUSED</div>}
        <Logo />
        <Motd />
        <StatusIndicators />
      </div>
      <div className={classes.main}>
        <Scroller />
        <h4 className={classes.consoleHeader}>CONSOLE</h4>
        <Console gameIsPaused={ctx.isPaused} />
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
