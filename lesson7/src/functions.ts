function calculateArraySum(numArray: number[]): number {
    return numArray.reduce((a: number, num: number) => a + num, 0);
}
const numArray = [1, 2, 3, 4, 10];
console.log(calculateArraySum(numArray));

const stringArray = ['a', 'b', 'c', 'd', 'e'];
const numArray2 = [3, 5, 3, 7, 1];
function showArrays(strings: string[], numbers: number[]): void {
    const concatArray = strings.join(' ') + ' ' + numbers.join(' ');
    console.log(concatArray);
}
showArrays(stringArray, numArray2);
