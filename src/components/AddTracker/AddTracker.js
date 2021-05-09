import Button from '../Button';
import s from './AddTracker.module.scss';
import IconPlayCircle from '../IconPlayCircle';

const AddTracker = () => {
  return (
    <form className={s.form}>
      <div className={s.inputWrapper}>
        <input
          type="text"
          className={s.input}
          placeholder="Enter tracker name"
          value=""
        />
        <Button className={s.btn}>
          <IconPlayCircle />
        </Button>
      </div>
    </form>
  );
};

export default AddTracker;
