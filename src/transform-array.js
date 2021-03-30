const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 let array = [];
 if(!Array.isArray(arr)) throw new Error;
 for(let i = 0; i < arr.length; i++){
  switch(arr[i]){
    case '--discard-next':
      if(i < arr.length - 1){
        i++;
        array.push(undefined);
      }
      break;
      case '--discard-prev':
        if(i > 0){
          array.pop();
          array.push(undefined);
        }
        break;
        case '--double-next':
          if(i < arr.length - 1){
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
};
