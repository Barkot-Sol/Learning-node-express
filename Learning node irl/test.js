// const name = "humble";

// console.log(name);

// const stay = (name) => {
//     console.log(`stay ${name}`)
// }

// stay('humble');

const int = setInterval(() => {
    console.log('interval')
}, 1000);

global.setTimeout(() => {
    console.log('timeout');
    clearInterval(int);
}, 3000);