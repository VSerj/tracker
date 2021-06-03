import Button from '../Button';
import IconPlayCircleOutline from '../IconPlayCircleOutline';
import IconRemoveCircleOutline from '../IconRemoveCircleOutline';
import s from './TrackerItem.module.scss';

const TrackerItem = ({ text, started }) => {
  return (
    <li className={`${s.item} ${started ? s.isStarted : ''}`}>
      <p className={s.elem}>{text}</p>
      <time className={s.elem}>12:60:97</time>
      <div className={`${s.btnsWrapper} ${s.elem}`}>
        <Button>
          <IconPlayCircleOutline />
        </Button>
        <Button>
          <IconRemoveCircleOutline className={s.removeBtn} />
        </Button>
      </div>
    </li>
  );
};

export default TrackerItem;
