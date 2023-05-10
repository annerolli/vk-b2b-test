import { controlName, data } from './const';
import { FormItem } from '@vkontakte/vkui';
import { Select } from '../../../../components/Select';
import { useFieldState } from '../../Context';

export const RoomSelect = () => {
  const [state, setState] = useFieldState(controlName);

  /**
   * @param {Event} e
   */
  const handleChange = (e) => setState(e.target.value);

  return (
    <FormItem top="Переговорная">
      <Select
        name={controlName}
        data={data}
        value={state}
        onChange={handleChange}
      />
    </FormItem>
  );
};
