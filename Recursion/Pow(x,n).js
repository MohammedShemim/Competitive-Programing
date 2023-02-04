/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let result = 1;
    let positive = true;
    if(x == 1 || n == 0)
        return 1;
    if(n < 0)
         positive = false;//check for sign, and store the boolean in a var
    
     for(let i = 0; i < Math.abs(n); i++) {//use Math.abs to get the positive value for n
        result *= x 
    }
    return positive ? result: 1 / result;//if positive, return result else return the inverse of the result
};
