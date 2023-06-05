import classes from './commands.module.css';
export const processLsCommand = payload => {
  const availableFiles = payload.files.filter(file => file.isAvailable);
  const num = availableFiles.length;
  return (
    <div className={classes.cmdLine}>
      <p>
        Scanning database... {num} file{num > 1 && 's'} found
      </p>
      {availableFiles.map(file => (
        <div key={file}>
          <div>{file.id}</div>
          <div>{file.readClearance}</div>
          <div>{file.size} RU</div>
        </div>
      ))}
    </div>
  );
};
