const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow'},
    { name: 'mobile phone', price: 1500, color: 'black'},
    { name: 'smart watch', price: 3000, color: 'black'},
    { name: 'sticky note', price: 300, color: 'pink'},
    { name: 'water glass', price: 3, color: 'black'}
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(blackProduct => blackProduct.color == "black");
// console.log(blacks);

const blackItem = products.find(item => item.color == "red");
// console.log(blackItem);
 
