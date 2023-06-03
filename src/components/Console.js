import { useEffect, useRef, useState } from 'react';
import classes from './Console.module.css';
import { InputPrompt } from './InputPrompt';
import { useCommandProcessor } from './hooks/useCommandProcessor';

export const Console = props => {
  const { gameIsPaused } = props;
  const [cmd, setCmd] = useState('');
  const [output, setOutput] = useState([]);
  const processCommand = useCommandProcessor();

  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    containerElement.scrollTop = containerElement.scrollHeight;
  }, [output]);

  const handleCmd = () => {
    const resp = processCommand(cmd);
    setOutput(prevOutput => [
      ...prevOutput,
      <div className={classes.consoleCommand}>{`>  ${cmd}`}</div>,
      <div className={classes.consoleResponse}>{resp}</div>,
    ]);
    setCmd('');
  };
  return (
    <div className={classes.console} ref={containerRef}>
      {output.map((line, i) => {
        return <div key={i}>{line}</div>;
      })}
      <InputPrompt
        cmd={cmd}
        setCmd={setCmd}
        handleCmd={handleCmd}
        disabled={gameIsPaused ? true : false}
      />
    </div>
  );
};
