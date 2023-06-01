import { useEffect } from 'react';
import classes from './Modal.module.css';
import { CLoseButton } from './UI/CloseButton';
import { ModalButton } from './UI/ModalButton';
export const Modal = props => {
  const { constructor, setPause } = props;

  useEffect(() => {
    // pause game when modal up, unpause when down
    setPause(true);
    return () => {
      setPause(false);
    };
  }, [setPause]);
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalWindow}>
        <CLoseButton />
        {constructor.msg.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
        <ul className={classes.buttonRow}>
          {constructor.userOptions.map((opt, i) => (
            <ModalButton key={i} callback={opt.callback}>
              {opt.label}
            </ModalButton>
          ))}
        </ul>
      </div>
    </div>
  );
};
