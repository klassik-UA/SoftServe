const array = [1,1,1,1,1,1];
const firstArr = array.slice(0,3)
const secondArr = array.slice(3,6)
const sum1 = firstArr.reduce(function (a,b) {
    return a + b});
const sum2 = secondArr.reduce(function (a,b) {
    return a + b});
if (sum1 === sum2) {
    console.log(' You Win!')
} else {
    console.log ('You lose!')
};
