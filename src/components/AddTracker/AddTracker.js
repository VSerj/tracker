import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button';
import s from './AddTracker.module.scss';
import IconPlayCircle from '../IconPlayCircle';
import { addTracker } from '../../store/actionCreators/actionCreators';

const AddTracker = () => {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();
  const handleAddTracker = () => dispatch(addTracker(textInput));

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleAddTracker(textInput);
      }}
    >
      <div className={s.inputWrapper}>
        <input
          type="text"
          className={s.input}
          placeholder="Enter tracker name"
          value={textInput}
          onChange={({ target }) => setTextInput(target.value)}
        />
        <Button className={s.btn}>
          <IconPlayCircle />
        </Button>
      </div>
    </form>
  );
};

export default AddTracker;
