import { useDispatch } from 'react-redux';

import TrackerTimer from './../TrackerTimer/TrackerTimer.js';
import {
  delTracker,
  startedTracker,
} from '../../store/actionCreators/actionCreators';
import Button from '../Button';
import IconPlayCircleOutline from '../IconPlayCircleOutline';
import IconRemoveCircleOutline from '../IconRemoveCircleOutline';
import IconPauseCircleOutline from '../IconPauseCircleOutline';
import s from './TrackerItem.module.scss';

const TrackerItem = ({ text, started, timestamp, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={`${s.item} ${started ? s.isStarted : ''}`}>
      <p className={s.elem}>{text}</p>
      <TrackerTimer classTimer={s.elem} timestamp={timestamp} />
      <div className={`${s.btnsWrapper} ${s.elem}`}>
        <Button onAction={() => dispatch(startedTracker(id))}>
          {started ? <IconPauseCircleOutline /> : <IconPlayCircleOutline />}
        </Button>
        <Button onAction={() => dispatch(delTracker(id))}>
          <IconRemoveCircleOutline className={s.removeBtn} />
        </Button>
      </div>
    </li>
  );
};

export default TrackerItem;
