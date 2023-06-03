import classes from './BarIndicator.module.css';

export const BarIndicator = props => {
  const { val, label, max } = props;
  const containerStyle = { flexBasis: `${(val / max) * 100}%` };
  return (
    <div className={classes.container}>
      {label}
      <div className={classes.bar} style={containerStyle}></div>
    </div>
  );
};
