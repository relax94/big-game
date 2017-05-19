var bigInt = require("big-integer");



const g = 7;
const p = 683;
const B = 32;

const left = bigInt(gcd(7, -1)).modPow(B, p);

const right = bigInt(g).modPow(B, p);

console.log(left);