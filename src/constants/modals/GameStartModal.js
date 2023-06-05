import { useContext } from 'react';
import { Modal } from '../../components/Modal';
import { GameContext } from '../../context/game-context';

export const GameStartModal = () => {
  const ctx = useContext(GameContext);
  const gameStartConstructor = {
    msg: ['+++ ERROR +++ SHIPBOARD AI OFFLINE +++'],
    userOptions: [
      {
        label: 'Engage manual override',
        callback: () => {
          ctx.setPhase('tutorial');
        },
      },
    ],
    default: 'Engage manual override',
  };
  return <Modal constructor={gameStartConstructor} />;
};
