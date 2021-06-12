import { useSelector } from 'react-redux';

import TrackerItem from '../TrackerItem/TrackerItem';
import s from './TrackerList.module.scss';

const TrackerList = () => {
  const trackers = useSelector(state => state);

  return (
    <ul className={s.list}>
      {trackers.map(({ id, text, timestamp, started }) => (
        <TrackerItem
          key={id}
          text={text}
          timestamp={timestamp}
          started={started}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TrackerList;
