export const processClearScreen = payload => {
  console.log('head set to ' + payload.clsHead);
  return payload.clearScreen();
};
