import { useSelector } from 'react-redux';
import TrackerItem from '../TrackerItem/TrackerItem';
import s from './TrackerList.module.scss';

const TrackerList = () => {
  const trackers = useSelector(state => state);
  console.log(trackers);
  return (
    <ul className={s.list}>
      {trackers.map(({ id, text, started }) => (
        <TrackerItem key={id} text={text} started={started} />
      ))}
    </ul>
  );
};

export default TrackerList;
