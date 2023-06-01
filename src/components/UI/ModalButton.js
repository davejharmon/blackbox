import classes from './ModalButton.module.css';

export const ModalButton = props => {
  const { callback } = props;
  return (
    <button className={classes.modalButton} onClick={callback}>
      {props.children}
    </button>
  );
};
