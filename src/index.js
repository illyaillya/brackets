


module.exports = function check(str, bracketsConfig) {
  while(/\(\)|\[\]|\{\}|\|\|/g.test(str)){ // while there are still any of these left
    str = str.replace(/\(\)|\[\]|\{\}|\|\|/g,"") // keep replacing with ''
}
return !str.length; // return the opposite of brace.length after that 
// 0 becomes 1 and 1 becomes 0
}
