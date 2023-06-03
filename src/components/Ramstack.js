import { useContext } from 'react';
import { DbContext } from '../context/db-context';
import classes from './Ramstack.module.css';
import { GameContext } from '../context/game-context';
export const Ramstack = () => {
  const ctx = { db: useContext(DbContext), game: useContext(GameContext) };
  const openFiles = ctx.db.files.filter(f => f.isOpen);

  return (
    <div className={classes.ramstack}>
      <h4>FILES IN RAM</h4>
      <div>
        {openFiles.map(file => (
          <button key={file.id} onClick={() => ctx.game.visualiseFile(file)}>
            {file.id} 👁️
          </button>
        ))}
      </div>
    </div>
  );
};
