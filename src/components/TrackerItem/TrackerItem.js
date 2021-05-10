import Button from '../Button';
import IconPlayCircleOutline from '../IconPlayCircleOutline';
import IconRemoveCircleOutline from '../IconRemoveCircleOutline';
import s from './TrackerItem.module.scss';

const TrackerItem = () => {
  return (
    <li className={`${s.item} ${s.isStarted}`}>
      <p className={s.elem}>
        texttext-text-texttext texttext -text text
        testttttttttttttttttttttttttttttttt
      </p>
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
