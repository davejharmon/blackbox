import { Redacted } from '../../components/UI/Redacted';

export const briefingFile = {
  id: 'briefing.txt',
  body: (
    <div>
      <p>Welcome recruit,</p>
      <p>
        Your mission, should you accept it is to{' '}
        <Redacted sec={2}>fuck around and find out</Redacted>.
      </p>
      <p>Many applied, you got the job.</p>
      <p>
        Don't <Redacted sec={3}>fuck</Redacted> it up.
      </p>
      <p>Yours, sincerely</p>
      <p>Space High Command</p>
    </div>
  ),
  readClearance: 'infrared',
  size: 1,
  isAvailable: true,
  isOpen: false,
};
