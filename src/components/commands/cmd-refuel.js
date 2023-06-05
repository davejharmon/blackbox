import { POSITIVE_INTEGER_PATTERN } from '../../constants/constants';

export const processRefuelCommand = (payload, commands) => {
  if (commands.length === 1) {
    console.log('default');
    return payload.refuel(1);
  } else if (POSITIVE_INTEGER_PATTERN.test(commands[1])) {
    return payload.refuel(commands[1]);
  }
  return `Invalid command. Please use format 'REFUEL [integer]'`;
};
