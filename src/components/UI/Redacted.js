import { useContext } from 'react';
import { MissionContext } from '../../context/mission-context';

export const Redacted = props => {
  const { sec } = props;
  const { clearance } = useContext(MissionContext);
  const str = props.children;
  const redactedString = str.replace(/[^ ]/g, '█');
  const resp = sec >= clearance ? redactedString : str;
  return <span>{resp}</span>;
};
