import { convertDateToInputFormat, leadingZero } from '@vkontakte/vkjs';

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
