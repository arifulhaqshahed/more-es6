const numbers = [2, 4, 5, 3, 10];
// const output = [];

/* 
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
console.log(output); */


/* function doubleIt(number){
    return number * 2;
} */

// arrow function
// const doubleIt = number => number * 2;


// using map
const output2 = numbers.map(number => number * 2);
// const output2 = numbers.map(doubleIt);
console.log(output2);