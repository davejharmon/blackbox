export const processRestartCommand = ctx => {
  ctx.setPhase('pregame');
  return 'restarting game...';
};
