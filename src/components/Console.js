import { useState } from 'react';
import classes from './Console.module.css';
import { InputPrompt } from './InputPrompt';
import { CommandStack } from './CommandStack';

export const Console = () => {
  const [cmd, setCmd] = useState('');
  const [cmdStack, setCmdStack] = useState(['Welcome, superuser']);

  const handleCmd = () => {
    const resp = `'${cmd}' command not recognised`;
    setCmdStack(cmdStack => [...cmdStack, resp]);
    setCmd('');
  };

  return (
    <div className={classes.console}>
      <CommandStack cmdStack={cmdStack} />
      <InputPrompt cmd={cmd} setCmd={setCmd} handleCmd={handleCmd} />
    </div>
  );
};
