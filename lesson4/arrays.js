const stringArray = ['apple', 'banana', 'cherry', 'kiwi'];
const numberArray = [1, 2, 3, 4, 5];
const anyArray = ['apple', 2, 'cherry', 4, 'date'];
const booleanArray = [true, false, true, false];

console.log('stringArray = ', stringArray);
console.log('numberArray = ', numberArray);
console.log('anyArray = ', anyArray);
console.log('booleanArray = ', booleanArray);

stringArray.push('mango');
numberArray.push(20);
anyArray.push('true');
booleanArray.push(false);
console.log('stringArray.push = ', stringArray);
console.log('numberArray.push = ', numberArray);
console.log('anyArray.push = ', anyArray);
console.log('booleanArray.push = ', booleanArray);

anyArray.pop();
console.log('anyArray.pop = ', anyArray);

numberArray.shift();
console.log('numberArray.shift = ', numberArray);

stringArray.unshift('orange');
console.log('stringArray.unshift = ', stringArray);
booleanArray.unshift(true);
console.log('booleanArray.unshift = ', booleanArray);

const filteredStrings = stringArray.filter(str => str.includes('a'));
console.log('filteredStrings = ', filteredStrings);

const filteredNumbers = numberArray.filter(num => num > 3);
console.log('filteredNumbers = ', filteredNumbers);

const foundAny = anyArray.find(item => typeof item === 'number');
console.log('foundAny = ', foundAny);
const foundBoolean = booleanArray.find(item => item === false);
console.log('foundBoolean = ', foundBoolean);

const sortedStrings = stringArray.sort();
console.log('sortedStrings = ', sortedStrings);
const sortedNumbers = numberArray.sort((a, b) => b - a);
console.log('sortedNumbers = ', sortedNumbers);

const concatAny = anyArray.concat(['grape', 6, 'lemon', true]);
console.log('concatAny = ', concatAny);
const concatStrings = stringArray.concat(['grape', 'lemon']);
console.log('concatStrings = ', concatStrings);

const hasApple = stringArray.includes('apple');
console.log('hasApple = ', hasApple);
const hasFalse = booleanArray.includes(false);
console.log('hasFalse = ', hasFalse);

stringArray.forEach((str => console.log('Fruit', str)));
numberArray.forEach((num => console.log('Number', num)));
anyArray.forEach((item => console.log('Item', item)));
booleanArray.forEach((bool => console.log('Boolean', bool)));

const mappedStrings = stringArray.map(str => str.toUpperCase());
console.log('mappedUpperStrings = ', mappedStrings);
const mappedNumbers = numberArray.map(num => num * 2);
console.log('mappedNumbers = ', mappedNumbers);
const mappedAny = anyArray.map(item => typeof item);
console.log('mappedAny = ', mappedAny);
const mappedBoolean = booleanArray.map(bool => !bool);
console.log('mappedBoolean = ', mappedBoolean);

const joinNumbers = numberArray.join(' - ');
console.log('joinNumbers = ', joinNumbers);
const joinStrings = stringArray.join(' - ');
console.log('joinStrings = ', joinStrings);
const joinAny = anyArray.join(' & ');
console.log('joinAny = ', joinAny);
const joinBoolean = booleanArray.join(' % ');
console.log('joinBoolean = ', joinBoolean);
