import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  } catch {
    throw new Error ('Invalid date!');
  }
  let season = date.getMonth() + 1;
  if(season === 12 || season === 1 || season === 2)
   return 'winter';
  if(season === 3 || season === 4 || season === 5)
   return 'spring';
  if(season === 6 || season === 7 || season === 8)
   return 'summer';
  if(season === 9 || season === 10 || season === 11)
   return 'autumn';
}
