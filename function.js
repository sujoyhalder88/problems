// Q1:Write a program to create a Mathematical calculation table from 0 to given number n.
function mathtable(table, n) {
    for (let i = 1; i <= n; i++) {
        console.log(`The MathTable ${table} * ${i} is ${table * i}`);
    }
}
mathtable(3, 10);

// Q2: Write a program to find the square of given number from 0 to n.
function square(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`The Square ${i} * ${i} is ${i * i}`);
    }
}
square(10);

// Q3:Problem :
// Given `n` pieces of sweet, help Peter and John divide it among themselves such that both get an
// equal number of sweets. Note that the sweet can not be broken into sub-pieces. You have to tell if it
// is possible to make such distribution or not based upon n number of pieces. I.e., possible outputs:
// `yes` or `no.`
Example - 1;
Input: 8;
Output: Yes;
Example - 2;
Input: 7;
Output: No;

function piecesSweet(n) {
    if (n % 2 == 0 || n <= 2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
piecesSweet(8);

// Q:4:Problem:
// Given the length of three line segments as a, b, and c., Find if they can form a triangle or not?
// (Students are not expected to take any user input, solve the problem using hardcoded value)

Example - 1;
Input: (a = 7), (b = 10), (c = 5);
Output: Triangle;

function segments(a, b, c) {
    if (b + c <= a || a + b <= c || a + c <= b) {
        return false;
    } else {
        return true;
    }
}
let a = 7,
    b = 10,
    c = 5;
if (segments(a, b, c)) {
    console.log("Triangle");
} else {
    console.log("Not Triangle");
}
