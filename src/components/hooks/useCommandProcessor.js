import { useContext } from 'react';
import { GameContext } from '../../context/game-context';

export const useCommandProcessor = () => {
  const ctx = useContext(GameContext);
  const processCommand = command => {
    // Process the command here and return the output

    if (command.substring(0, 5).toLowerCase() === 'echo ') {
      // echo
      return command.substring(5);
    } else if (command.toLowerCase() === 'restart') {
      // restart
      ctx.setPhase('pregame');
      return 'restarting game...';
    } else if (command.toLowerCase() === 'pause') {
      // pause
      ctx.setIsPaused(true);
      return 'pausing game...';
    } else if (command.toLowerCase() === 'help') {
      // help
      return (
        <div>
          <p>
            For more information on a specific command, type HELP command-name:
          </p>
          <pre>{`RESTART \t restart your journey`}</pre>
          <pre>{`SCAN \t\t search for compatible devices in range`}</pre>
          <pre>{`LINK \t\t attempt to link to compatible device`}</pre>
          <pre>{`LS \t\t\t list files in database`}</pre>
          <pre>{`OPEN \t\t open file (clearance required)`}</pre>
          <pre>{`SSH \t\t secure socket login to compatible device`}</pre>
          <p>
            For more information on console commands, consult the user manual.
          </p>
        </div>
      );
    } else if (command.toLowerCase() === 'ls') {
      // help
      return (
        <div>
          <p>Scanning database...</p>
          <pre>{`briefing.txt \t\t 1RU`}</pre>
        </div>
      );
    } else return 'command not recognised';
  };

  return processCommand;
};
