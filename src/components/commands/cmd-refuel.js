import { POSITIVE_INTEGER_PATTERN } from '../../constants/constants';

export const processRefuelCommand = (ctx, stub) => {
  const arg = stub.trimStart().trimEnd();
  let resp;
  console.log(`stub is ${stub}`);
  if (arg === '') {
    resp = ctx.refuel(1);
  } else if (POSITIVE_INTEGER_PATTERN.test(arg)) {
    resp = ctx.refuel(arg);
  } else resp = `Invalid command. Please use format 'REFUEL [x]'`;
  return resp;
};
