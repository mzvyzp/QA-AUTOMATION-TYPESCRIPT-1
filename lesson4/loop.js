for (let i = 0; i < 10; i++) {
    console.log('for i = ', i);
}

let i = 0;
while (i < 10) {
    console.log('while i = ', i);
    i++;
}

i = 0;
do {
    console.log('do while i = ', i);
    i++;
}
while (i < 10);

let j = 0;
for (let i = 100; i >= 0; i -= 10) {
    console.log('for i = ', i, 'Run# ', j);
    j++;
}

i = 100;
j = 0;
while (i >= 0) {
    console.log('while i = ', i, 'Run# ', j);
    i -= 10;
    j++;
}

i = 100;
j = 0;
do {
    console.log('do while i = ', i, 'Run# ', j);
    i -= 10;
    j++;
}
while (i >= 0);
