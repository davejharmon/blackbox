import { useContext, useEffect } from 'react';
import classes from './Modal.module.css';
import { CloseButton } from './UI/CloseButton';
import { ModalButton } from './UI/ModalButton';
import { GameContext } from '../context/game-context';
export const Modal = props => {
  const { constructor } = props;
  const ctx = useContext(GameContext);
  const { setIsPaused } = ctx;
  const defaultHandler = constructor.userOptions.find(
    opt => opt.label === constructor.default
  )?.callback;
  const escapeHandler = constructor.escape
    ? constructor.userOptions.find(opt => opt.label === constructor.escape)
        ?.callback
    : defaultHandler;

  useEffect(() => {
    // pause game when modal up, unpause when down
    setIsPaused(true);
    return () => {
      setIsPaused(false);
    };
  }, [setIsPaused]);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        escapeHandler();
      } else if (event.key === 'Enter') {
        defaultHandler();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [defaultHandler, escapeHandler]);

  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalWindow}>
        <CloseButton onClick={escapeHandler} />
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
