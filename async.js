// Asynchonours nature- NON-Blocking in JS
const fsa = require('fs');
const fs = require('fs/promises');


fsa.readFile('file1.txt', 'utf-8', ((data) => {
    console.log(data);
}))
console.log('Hello, I am physically fit person. I will be first.');

// Async/await- Making the nature blocking

fsa.readFile('file1.txt', 'utf-8', ((data) => {
    console.log(data + " Outside Asynchonours Function why");
}))

let see = async (file1, file2, file3) => {
    let f1 = fs.readFile(file1, 'utf-8');
    let f2 = fs.readFile(file3, 'utf-8');
    let f3 = fs.readFile(file2, 'utf-8');
    let c1 = await f1;
    console.log(c1);
    let c2 = await f2;
    console.log(c2);
    let c3 = await f3;
    console.log(c3);
}

console.log('Hello, I am physically fit person. I will be the first.');
see('file1.txt','file2.txt','file3.txt');
