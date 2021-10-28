class Support {
    name;
    designation = 'support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

class Company {
    name;
    designation = 'support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}




const amir = new Support('Amir Khan', 'Delhi');
const salman = new Support('Salman Khan', 'Kerala');

function min(nums){
    return Math.min(nums)
}
console.log(min([7,3,9 ]))

const [a, b] = [2,2,3,4,45,5];
console.log(a+b);
const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5,4, 7, 9, 22, 3,4, 45, 67, 88, 99];
let output = nums.filter(n => n%2);
console.log(output);
