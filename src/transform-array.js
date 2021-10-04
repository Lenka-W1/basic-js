import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let array = [];
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        if(i < arr.length - 1) {
          i++;
          array.push(undefined);
        }
        break;
      case '--discard-prev':
        if(i > 0) {
          array.pop();
          array.push(undefined);
        }
        break;
      case '--double-next':
        if(i < arr.length - 1) {
          array.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if(i > 0)
          array.push(array[array.length - 1]);
        break;
        default:
        array.push(arr[i]);
        break;
    }
  }
  return array.filter(el => el != undefined);
}
