import { useContext, useEffect, useRef } from 'react';
import classes from './Console.module.css';
import { InputPrompt } from './InputPrompt';
import { useCommandProcessor } from './hooks/useCommandProcessor';
import { GameContext } from '../context/game-context';

export const Console = props => {
  const { gameIsPaused } = props;
  const ctx = useContext(GameContext);
  const { consoleHistory } = ctx;
  const processCommand = useCommandProcessor();

  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    containerElement.scrollTop = containerElement.scrollHeight;
  }, [consoleHistory]);

  const handleCmd = input => {
    const cmd = <div className={classes.consoleCommand}>{`> ${input}`}</div>;
    const resp = (
      <div className={classes.consoleResponse}>{processCommand(input)}</div>
    );
    ctx.writeToConsole({ cmd, resp });
  };
  return (
    <div className={classes.console} ref={containerRef}>
      {ctx.consoleHistory.slice(ctx.clsHead).map((cmdResp, i) => {
        return (
          <div key={i}>
            {cmdResp.cmd}
            {cmdResp.resp}
          </div>
        );
      })}
      <InputPrompt
        scrub={ctx.scrubHistory}
        handleCmd={handleCmd}
        disabled={gameIsPaused ? true : false}
      />
    </div>
  );
};
