import Button from '../Button';
import s from './AddTracker.module.scss';

const AddTracker = () => {
  return (
    <form className={s.form}>
      <input
        type="text"
        className={s.input}
        placeholder="Enter tracker name"
        value=""
      ></input>
      <Button></Button>
    </form>
  );
};

export default AddTracker;
