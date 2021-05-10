import TrackerItem from '../TrackerItem/TrackerItem';
import s from './TrackerList.module.scss'

const TrackerList = () => {
  return (
      <ul className={s.list}>
        <TrackerItem />
      </ul>
  );
};

export default TrackerList;
