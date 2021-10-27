const fish = {name: 'Hilsa', price: 900, address: 'Chandpur', dress:'silver' };
/* const name = fish.name;
const id = fish.id;
const price = fish.price;
const dress = fish.dress; */

const {name, price, dress} = fish;


console.log(name);
console.log(price);
console.log(dress);


const company = {name: 'GP',
                ceo: {name: 'atikur', 
                        id: 12,
                         address: 'dhaka'},
                web: {first: 'html', 
                        second: 'CSS', 
                            third: 'js'},
                started: '23rd August, 2002'}

const {id, address} = company.ceo;
console.log(id, address)