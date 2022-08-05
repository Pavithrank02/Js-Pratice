'use strict'
// const bookings = [];
// const createBooking = function(flightNum, numPassengers, price) {

//     const booking = { 
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
    
// };
// createBooking('LH123');

// const flight = 'LH234';
// const pavi = {
//     name: 'Pavithran',
//     passport: 34532,
// }
// const checkIn = function(flightNum, passenger) {
//     if(passenger.passport === 34532) {
//         alert("Checked In")
//     } else {
//         alert(" Wrong Passport ")
//     }

// } 
// checkIn(flight,  pavi);
// console.log(flight);
// console.log(pavi);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random()*10000000);
 
// }
// newPassport(pavi); 

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greetee = greet('wow');
// greetee("pavi");
// greetee("nav");

const lufthansa = {
    airline: 'luf',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} Booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
    },
    

};

lufthansa.book(239, 'Pavi');
lufthansa.book(987, 'pavi');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings', 
    iataCode: 'EW',
    booking:[],
}; 

const book = lufthansa.book;
//book(23, 'Sarah Williams');
book.call(eurowings, 234, "'Sarah Williams");

//bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');
bookLH(23, 'Wild oose ');

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++; 
    console.log(this.planes)
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = function(rate) {
return function(value) {
    return value + value*rate;
}

}
const addVat = addTax(0.23)
console.log(addVat(100, .23));