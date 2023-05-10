import s from './DatePicker.module.css';
import { Input, LocaleProvider, classNames } from '@vkontakte/vkui';
import { Calendar } from '@vkontakte/vkui';
import { FormItem } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import { controlName } from './const';
import { convertToDatetimeLocal, createMinValue } from './lib';
import { isUndefined } from '@vkontakte/vkjs';
import { useFieldState } from '../../Context';
import { MINUTE_PER_MS } from '../../../../shared/lib/date';

export const DatePicker = () => {
  const [minValue, setMinValue] = useState(createMinValue(new Date()));
  const [state, setState] = useFieldState(controlName);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setMinValue(createMinValue(new Date()));
    }, MINUTE_PER_MS);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /**
   *
   * @param {Date} value
   * @returns
   */
  const handleChange = (value) => {
    if (isUndefined(value)) {
      return;
    }

    if (minValue > value) {
      return;
    }

    setState(value);
  };

  /**
   * @param {Event} event
   */
  const handleFocus = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setVisibility(true);
  };

  const handleCalendarClose = () => {
    setVisibility(false);
  };

  return (
    <FormItem top="Дата" className={s.DatePicker}>
      <Input
        type="datetime-local"
        name={controlName}
        min={convertToDatetimeLocal(minValue)}
        value={convertToDatetimeLocal(state)}
        onFocus={handleFocus}
        readOnly
      />
      <LocaleProvider value="ru">
        <Calendar
          className={classNames(
            s.DatePicker__Calendar,
            !visibility && s['DatePicker__Calendar--hidden']
          )}
          size="m"
          value={state}
          onChange={handleChange}
          onClose={handleCalendarClose}
          enableTime
          disablePast
        />
      </LocaleProvider>
    </FormItem>
  );
};
