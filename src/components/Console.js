import { useState } from 'react';
import classes from './Console.module.css';
import { InputPrompt } from './InputPrompt';
import { useCommandProcessor } from './hooks/useCommandProcessor';

export const Console = props => {
  const { gameIsPaused } = props;
  const [cmd, setCmd] = useState('');
  const [output, setOutput] = useState([]);
  const processCommand = useCommandProcessor();

  const handleCmd = () => {
    const resp = processCommand(cmd);
    console.log(cmd);
    console.log(resp);
    setOutput(prevOutput => [...prevOutput, `> ${cmd}`, resp]);
    setCmd('');
  };
  return (
    <div className={classes.console}>
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
