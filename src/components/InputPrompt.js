import { useEffect, useRef } from 'react';
import classes from './InputPrompt.module.css';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';
export const InputPrompt = props => {
  const { cmd, setCmd, handleCmd } = props;
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBlur = e => {
    e.preventDefault();
    inputRef.current.focus();
  };

  const handleChange = e => {
    setCmd(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleCmd();
  };

  return (
    <div className={classes.inputPrompt}>
      <div>{'> '}</div>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          ref={inputRef}
          name="input"
          onBlur={handleBlur}
          onChange={handleChange}
          value={cmd}
        />
      </form>
    </div>
  );
};
