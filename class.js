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

const amir = new Support('Amir Khan', 'Delhi');
amir.startSession();
const salman = new Support('Salman Khan', 'Kerala');
console.log(amir);
console.log(salman);