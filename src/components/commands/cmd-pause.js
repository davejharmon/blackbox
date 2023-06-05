export const processPauseCommand = (payload, commands) => {
  // Warning: Cannot update a component (`GameContextProvider`) while rendering a different component (`ConsoleResponse`). To locate the bad setState() call inside `ConsoleResponse`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render

  const pauseEnded = () => {
    payload.setIsPaused(false);
    console.log('pause ended');
  }; // need a console writer
  setTimeout(pauseEnded, commands[1] * 1000);
  console.log(`pausing for ${commands[1]} seconds`);
  payload.setIsPaused(true);
  return 'pausing game...';
};
