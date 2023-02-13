/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let stack = [];
  let k1 = k
  for (let n of num){
      while (k > 0 && stack.length > 0 && stack[stack.length-1] > n){
          stack.pop();
          k--;
      }
      stack.push(n)
  }
  let res = ""
  stack = stack.slice(0, num.length-k1)
  let checkNum = false
  for (let n of stack){
      if (n == "0"){
          if (checkNum){
              res += n
          }          
      }
      else{
          res += n
          checkNum = true
      }
  }

  return res.slice(0, num.length-k1).length == 0? '0' : res.slice(0, num.length-k1);
};
