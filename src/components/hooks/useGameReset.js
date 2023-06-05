import { useContext } from 'react';
import { MissionContext } from '../../context/mission-context';
import { GameContext } from '../../context/game-context';
import { DbContext } from '../../context/db-context';
export const useGameReset = () => {
  const ctx = [
    useContext(GameContext),
    useContext(MissionContext),
    useContext(DbContext),
  ];
  const gameReset = () => {
    ctx.forEach(ctx => ctx.reset());
  };
  return gameReset;
};
