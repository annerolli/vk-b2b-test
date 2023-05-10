import { Textarea } from '@vkontakte/vkui';
import { FormItem } from '@vkontakte/vkui';
import { controlName } from './const';
import { useFieldState } from '../../Context';

export const Comment = () => {
  const [state, setState] = useFieldState(controlName);

  /**
   * @param {Event} e
   */
  const handleChange = (e) => setState(e.target.value);

  return (
    <FormItem top="Комментарий">
      <Textarea
        name={controlName}
        placeholder="Укажите количество человек и ваши пожелания"
        value={state}
        onChange={handleChange}
      />
    </FormItem>
  );
};
