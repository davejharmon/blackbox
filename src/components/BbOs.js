import classes from './BbOs.module.css';
import { Console } from './Console';
import { Logo } from './Logo';
import { Motd } from './Motd';
import { Ramstack } from './Ramstack';
import { Scroller } from './Scroller';
import { StatusIndicators } from './StatusIndicators';
import { Visualiser } from './Visualiser';

export const BbOs = () => {
  return (
    <div className={classes.osWindow}>
      <div className={classes.leftBar}>
        <Logo />
        <Motd />
        <StatusIndicators />
      </div>
      <div className={classes.main}>
        <Scroller />
        <h4 className={classes.consoleHeader}>CONSOLE</h4>
        <Console />
        <h4 className={classes.visualiserHeader}>VISUALISER</h4>
        <Visualiser />
      </div>
      <div className={classes.rightBar}>
        <Ramstack />
      </div>
    </div>
  );
};
