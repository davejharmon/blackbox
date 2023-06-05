/* eslint-disable no-unreachable */
import { useContext } from 'react';
import { GameContext } from '../../context/game-context';
import { processEchoCommand } from '../commands/cmd-echo';
import { processRestartCommand } from '../commands/cmd-restart';
import { processPauseCommand } from '../commands/cmd-pause';
import { processHelpCommand } from '../commands/cmd-help';
import { processLsCommand } from '../commands/cmd-ls';
import { processRefuelCommand } from '../commands/cmd-refuel';
import { MissionContext } from '../../context/mission-context';
import { processOpenCommand } from '../commands/cmd-open';
import { DbContext } from '../../context/db-context';
import { useGameReset } from './useGameReset';
import { ConsoleResponse } from '../UI/ConsoleResponse';
import { processClearScreen } from '../commands/cmd-cls';

export const useCommandProcessor = () => {
  const ctx = {
    game: useContext(GameContext),
    mission: useContext(MissionContext),
    db: useContext(DbContext),
  };
  const resetGame = useGameReset();

  return command => {
    // Process the command here and return the output
    const parsed = command.toLowerCase().split(' ');
    if (parsed.length === 0) return '';

    switch (parsed[0]) {
      case 'echo':
        return (
          <ConsoleResponse
            commands={parsed}
            minArgs={2}
            process={processEchoCommand}
            payload={parsed.slice(1)}
          />
        );
      case 'ls':
        return (
          <ConsoleResponse
            commands={parsed}
            maxArgs={1}
            process={processLsCommand}
            payload={ctx.db}
          />
        );
      case 'pause':
        return (
          <ConsoleResponse
            commands={parsed}
            maxArgs={2}
            minArgs={2}
            process={processPauseCommand}
            payload={ctx.game}
          />
        );
      case 'restart':
        return (
          <ConsoleResponse
            commands={parsed}
            maxArgs={1}
            process={processRestartCommand}
            payload={resetGame}
          />
        );
      case 'help':
        return (
          <ConsoleResponse
            commands={parsed}
            maxArgs={2}
            process={processHelpCommand}
          />
        );
      case 'refuel':
        return (
          <ConsoleResponse
            commands={parsed}
            maxArgs={2}
            process={processRefuelCommand}
            payload={ctx.mission}
          />
        );
      case 'open':
        return (
          <ConsoleResponse
            commands={parsed}
            maxArgs={2}
            minArgs={2}
            process={processOpenCommand}
            payload={ctx.db}
          />
        );
      case 'cls':
        return (
          <ConsoleResponse
            commands={parsed}
            maxArgs={1}
            minArgs={1}
            process={processClearScreen}
            payload={ctx.game}
          />
        );

      default:
        return 'Command not recognised';
    }
  };
};
