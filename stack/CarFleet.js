/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let res = 0, cars = [];
    for (i in position){
        cars.push([position[i], (target - position[i]) / speed[i]]);
    }
    cars.sort((a, b) => a[0] - b[0]);
    let cur =0;
    for (let j = position.length - 1; j >= 0 ; j--) {
        if (cars[j][1]> cur) {
            cur = cars[j][1];
            res++;
        }
    }
    return res;
};
