import classes from './CloseButton.module.css';
export const CloseButton = props => {
  const { onClick } = props;
  return (
    <div className={classes.closeButton} onClick={onClick}>
      ❌
    </div>
  );
};
