import classes from './CommandStack.module.css';
export const CommandStack = props => {
  const { cmdStack } = props;
  return (
    <ul className={classes.commandStack}>
      {cmdStack.map((cmd, i) => (
        <li key={i}>{cmd}</li>
      ))}
    </ul>
  );
};
