import { createContext, useState } from 'react';
export const GameContext = createContext({
  isPaused: false,
  setIsPaused: () => {},
  phase: 'pregame',
  setPhase: () => {},
  visualised: null,
  visualiseFile: () => {},
  gameOver: false,
  setGameOver: () => {},
  consoleHistory: [],
  writeToConsole: () => {},
  clsHead: 0,
  clearScreen: () => {},
  cursorHead: 0,
  setCursorHead: () => {},
  retrieveCommand: () => {},
  scrubHistory: () => {},
  reset: () => {},
});

export const GameContextProvider = props => {
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState('pregame');
  const [visualised, setVisualised] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [consoleHistory, setConsoleHistory] = useState([]);
  const [clsHead, setClsHead] = useState(0);
  const [cursorHead, setCursorHead] = useState(0);
  const visualiseFile = file => {
    setVisualised(file);
  };

  const clearScreen = () => {
    setClsHead(consoleHistory.length + 1);
  };

  const writeToConsole = cmdResp => {
    setConsoleHistory([
      ...consoleHistory,
      {
        cmd: cmdResp.cmd,
        resp: cmdResp.resp,
      },
    ]);
    setCursorHead(consoleHistory.length + 1);
  };

  const retrieveCommand = line => {
    return consoleHistory[line].cmd.props.children.substring(2);
  };

  const scrubHistory = mod => {
    const newHead = cursorHead + mod;
    if (newHead >= 0 && newHead < consoleHistory.length) {
      setCursorHead(newHead);
      return retrieveCommand(newHead);
    } else return -1;
  };

  const reset = () => {
    setIsPaused(false);
    setPhase('pregame');
    setVisualised(null);
    setGameOver(false);
    setClsHead(0);
    setConsoleHistory({});
    setCursorHead(0);
  };

  return (
    <GameContext.Provider
      value={{
        isPaused,
        setIsPaused,
        phase,
        setPhase,
        visualised,
        visualiseFile,
        gameOver,
        setGameOver,
        consoleHistory,
        clsHead,
        clearScreen,
        writeToConsole,
        setCursorHead,
        retrieveCommand,
        scrubHistory,
        reset,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
