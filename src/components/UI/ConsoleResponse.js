export const ConsoleResponse = props => {
  const { commands, minArgs = 1, maxArgs, process, payload = null } = props;

  if (commands.length < minArgs) return <div>Error: Too few arguments</div>;
  if (maxArgs && commands.length > maxArgs)
    return <div>Error: Too many arguments</div>;

  return <div>{process(payload, commands)}</div>;
};
