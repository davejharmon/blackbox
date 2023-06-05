import { useEffect, useRef, useState } from 'react';
import classes from './InputPrompt.module.css';
export const InputPrompt = props => {
  const { handleCmd, disabled, scrub } = props;
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [disabled]);

  useEffect(() => {
    let history = -1;
    const handleKeyPress = event => {
      if (event.key === 'ArrowDown') {
        console.log('down');
        history = scrub(1);
      } else if (event.key === 'ArrowUp') {
        console.log('up');
        history = scrub(-1);
      }
      if (history !== -1) setInput(history);
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [scrub]);

  const handleBlur = e => {
    e.preventDefault();
    inputRef.current.focus();
  };

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleCmd(input);
    setInput('');
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
          value={input}
          disabled={disabled}
        />
      </form>
    </div>
  );
};
