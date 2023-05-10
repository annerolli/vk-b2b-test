import { MINUTE_PER_MS } from './const';

/**
 * Добавляет к дате количество минут
 *
 * @param {Date} date
 * @param {number} count количество минут
 */
export function addMinutes(date, count) {
  const timeStamp = date.getTime() + count * MINUTE_PER_MS;
  return new Date(timeStamp);
}
