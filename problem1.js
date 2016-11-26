// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// create empty list:
var list = [];
// for a number n between 1 and 9 (given condition: n < 10):
for(n = 1; n < 10; n++) {
    // check if n is divided by 3 without remainder:
    if(n % 3 == 0) {
        // if this applies to n, add n to list:
        list.push(n);
    }
    // check if n is divided by 5 without remainder:
    else if(n % 5 == 0) {
        // if this applies to n, add n to list:
        list.push(n);
    }
}
// print list that contains all numbers to which the conditions apply:
console.log(list)
/*
Create sum of all list elements and apply .reduce() method to list:
- reduce() takes two parameters: function and accumulator.
- function is applied against accumulator and each value of the array.
- The accumulator has an initialValue of 0 and is used to accumulate the value
returned after each run through the function, which in this case returns 
the sum of two numbers.
*/

var sum = list.reduce(function(a, b) {
    return a + b;
}, 0)
// print sum of all number in list
console.log(sum)

// ===================
// Solution Problem 2:
// ===================
// Find the sum of all the multiples of 3 or 5 below 1000.
var list2 = []
for(n = 1; n < 1000; n++) {
    if(n % 3 == 0) {
        list2.push(n);
    }
    else if (n % 5 == 0) {
        list2.push(n);
    }
}
var sum2 = list2.reduce(function(a, b) {
    return a + b;
}, 0)
console.log(sum2)
