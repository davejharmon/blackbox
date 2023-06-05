import { Modal } from '../../components/Modal';
import { useGameReset } from '../../components/hooks/useGameReset';

export const GameOverModal = () => {
  const resetGame = useGameReset();
  const gameOverConstructor = {
    msg: ['+++ GAME OVER +++'],
    userOptions: [
      {
        label: 'Restart',
        callback: () => resetGame(),
      },
    ],
    default: 'Restart',
  };
  console.log('i got triggered');
  return <Modal constructor={gameOverConstructor} />;
};
