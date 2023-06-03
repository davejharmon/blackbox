export const processPauseCommand = ctx => {
  ctx.setIsPaused(true);
  return 'pausing game...';
};
