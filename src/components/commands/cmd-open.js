export const processOpenCommand = (db, stub) => {
  const arg = stub.trimStart().trimEnd();
  let resp;
  console.log(`stub is ${stub}`);
  if (arg !== '') {
    resp = db.updateOpenStatus(arg, true);
  } else {
    resp = `Invalid command. Please use format 'OPEN [x]`;
  }
  return resp;
};
