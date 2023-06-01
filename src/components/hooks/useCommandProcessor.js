export const useCommandProcessor = () => {
  const processCommand = command => {
    // Process the command here and return the output

    if (command.substring(0, 5).toLowerCase() === 'echo ') {
      // echo
      return command.substring(5);
    } else if (command.toLowerCase() === 'restart') {
      // restart
      return 'restarting game...';
    } else if (command.toLowerCase() === 'pause') {
      // pause
      return 'pausing game...';
    } else return 'command not recognised';
  };

  return processCommand;
};
