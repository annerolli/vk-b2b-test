import { MINUTE_PER_MS, addMinutes } from '../date';
import {
  FORM_FIELDS,
  FORM_DATE_FIELD_NAME,
  FORM_NAME,
  DATE_MIN_GAP,
  FORM_OPTIONAL_FIELDS,
} from './const';
import { convertToDatetimeLocal } from './lib';

/**
 * Инициализация формы бронирования переговорной
 */
export function setupBookingForm() {
  /**
   * @type {HTMLFormElement}
   */
  const form = document.forms[FORM_NAME];

  if (!form) {
    console.warn('Form not found');
    return;
  }

  /**
   * @type {HTMLInputElement[]}
   */
  const fields = FORM_FIELDS.map((name) => form[name]);

  if (!fields.every(Boolean)) {
    console.warn('Not all fields found');
    return;
  }

  const dateField = fields.find((el) => el.name === FORM_DATE_FIELD_NAME);

  setupDatetimeControl(dateField);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = fields.reduce((acc, current) => {
      if (!current.value && FORM_OPTIONAL_FIELDS.includes(current.name)) {
        return acc;
      }

      acc[current.name] = current.value;
      return acc;
    }, {});

    const serializedData = JSON.stringify(data);

    console.log(serializedData);
  });
}

/**
 * Иницилизация datetime контрола
 *
 * @param {HTMLInputElement} el
 * @returns функция сброса таймера обновления минимального значения для элемента
 */
function setupDatetimeControl(el) {
  const callback = () => {
    const nextDate = addMinutes(new Date(), DATE_MIN_GAP);
    el.min = convertToDatetimeLocal(nextDate);
  };

  callback();
  const timer = setInterval(callback, MINUTE_PER_MS);

  return () => {
    clearInterval(timer);
  };
}
