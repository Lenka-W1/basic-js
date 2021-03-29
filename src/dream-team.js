const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let name = [];
    if(!Array.isArray(members)){
      return false;
    } 
    for(let i = 0; i < members.length; i++){
      if(typeof members[i] === 'string'){
        let reg = (/[a-z]/i).exec(members[i]);
        name.push(reg[0].toUpperCase());
     }
    }
    return name.sort().join('');
};
