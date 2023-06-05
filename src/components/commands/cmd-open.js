export const processOpenCommand = (payload, commands) => {
  if (commands.length >= 3)
    return `Invalid command: Please use format 'open [filename]'`;
  return payload.updateOpenStatus(commands[1], true);
};
