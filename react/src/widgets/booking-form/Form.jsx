import { FormLayout } from '@vkontakte/vkui';
import { TowerSelect } from './components/tower-select';
import { FloorSelect } from './components/floor-select';
import { RoomSelect } from './components/room-select';
import {
  DatePicker,
  checkDateValidity,
  dateControlName,
} from './components/date-picker';
import { Comment } from './components/comment';
import { Actions } from './components/actions';
import { useFormReset, useFormState } from './Context';
import { Header } from './components/header';

export const Form = () => {
  const state = useFormState();

  /**
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const form = event.target;

    if (!form.checkValidity()) {
      console.warn('Form invalid');
      return;
    }

    if (!checkDateValidity(state[dateControlName])) {
      console.warn('Date invalid');
      return;
    }

    const serializedData = JSON.stringify(state);

    console.log(serializedData);
  };

  const handleReset = useFormReset();

  return (
    <FormLayout onSubmit={handleSubmit} onReset={handleReset}>
      <Header />
      <TowerSelect />
      <FloorSelect />
      <RoomSelect />
      <DatePicker />
      <Comment />
      <Actions />
    </FormLayout>
  );
};
