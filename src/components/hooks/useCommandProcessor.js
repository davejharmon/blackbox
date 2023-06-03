import { useContext } from 'react';
import { GameContext } from '../../context/game-context';
import { processEchoCommand } from '../commands/cmd-echo';
import { processRestartCommand } from '../commands/cmd-restart';
import { processPauseCommand } from '../commands/cmd-pause';
import { processHelpCommand } from '../commands/cmd-help';
import { processLsCommand } from '../commands/cmd-ls';
import { processRefuelCommand } from '../commands/cmd-refuel';
import { MissionContext } from '../../context/mission-context';

export const useCommandProcessor = () => {
  const ctx = {
    game: useContext(GameContext),
    mission: useContext(MissionContext),
  };
  const processCommand = command => {
    // Process the command here and return the output
    if (command.substring(0, 5).toLowerCase() === 'echo ')
      return processEchoCommand(command);
    else if (command.toLowerCase() === 'restart')
      return processRestartCommand(ctx.game);
    else if (command.toLowerCase() === 'pause')
      return processPauseCommand(ctx.game);
    else if (command.toLowerCase() === 'help') return processHelpCommand();
    else if (command.toLowerCase() === 'ls') return processLsCommand();
    else if (command.substring(0, 6).toLowerCase() === 'refuel')
      return processRefuelCommand(ctx.mission, command.substring(6));
    else return 'command not recognised';
  };

  return processCommand;
};
