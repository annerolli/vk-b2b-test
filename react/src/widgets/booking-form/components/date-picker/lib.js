import { convertDateToInputFormat, leadingZero } from '@vkontakte/vkjs';
import { addMinutes } from '../../../../shared/lib/date';
import { DATE_MIN_GAP } from './const';

/**
 * Конвертирует входящую дату
 * в валидный формат для input[type=datetime-local]
 *
 * @param {Date} date
 */
export function convertToDatetimeLocal(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${convertDateToInputFormat(date)}T${leadingZero(hours)}:${leadingZero(
    minutes
  )}`;
}

/**
 * Возвращает минимальное значение
 *
 * @param {Date} date
 */
export function createMinValue(date) {
  return addMinutes(date, DATE_MIN_GAP);
}

/**
 * Валидирует входную дату.
 * Условие: входная дата должна быть больше текущей
 *
 * @param {Date} value
 */
export function checkValidity(value) {
  return Date.now() < value;
}
