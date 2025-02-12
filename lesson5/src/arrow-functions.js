const calculateArraySum = (numArray) => numArray.reduce((a, numArray) => a + numArray, 0);
const numArray = [1, 2, 3, 4, 10];
console.log(calculateArraySum(numArray));

const stringArray = ['a', 'b', 'c', 'd', 'e'];
const numArray2 = [3, 5, 3, 7, 1];
const showArrays = (strings, numbers) => {
    const concatArray = strings.join(' ') + ' ' + numbers.join(' ');
    console.log(concatArray);
};
showArrays(stringArray, numArray2);
