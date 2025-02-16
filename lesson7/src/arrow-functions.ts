const calculateArraySum = (numArray: number[]): number => numArray.reduce((a: number, num: number) => a + num, 0);
const numArray1 = [1, 2, 3, 4, 10];
console.log(calculateArraySum(numArray1));

const stringArray1 = ['a', 'b', 'c', 'd', 'e'];
const numArray2 = [3, 5, 3, 7, 1];
const showArrays = (strings: string[], numbers: number[]): void => {
    const concatArray = strings.join(' ') + ' ' + numbers.join(' ');
    console.log(concatArray);
};
showArrays(stringArray1, numArray2);
