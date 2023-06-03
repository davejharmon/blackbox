import { useContext } from 'react';
import classes from './Visualiser.module.css';
import { GameContext } from '../context/game-context';
export const Visualiser = () => {
  const game = useContext(GameContext);
  return (
    <div className={classes.visualiser}>
      {game.visualised && game.visualised.body}
    </div>
  );
};
