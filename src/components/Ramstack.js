import { useContext } from 'react';
import { DbContext } from '../context/db-context';
import classes from './Ramstack.module.css';
import { GameContext } from '../context/game-context';
import { RightBarWidget } from './UI/RightBarWidget';
export const Ramstack = () => {
  const ctx = {
    db: useContext(DbContext),
    game: useContext(GameContext),
  };
  const openFiles = ctx.db.files.filter(f => f.isOpen);
  const ramstack = openFiles;
  const fileCount = ramstack.length;
  for (let i = fileCount; i < 16; i++) {
    ramstack.push({ id: undefined });
  }
  return (
    <RightBarWidget>
      <h4>RANDOM ACCESS MEMORY - 0/16 RU</h4>
      <div className={classes.ramstack}>
        {ramstack.map((file, i) => {
          return (
            <div
              className={classes.memory}
              key={i}
              onClick={() => ctx.game.visualiseFile(file)}
            >
              <div className={classes.memoryAddr}>{i}</div>
              <div className={classes.memoryId}>{file.id}</div>
            </div>
          );
        })}
      </div>
    </RightBarWidget>
  );
};
