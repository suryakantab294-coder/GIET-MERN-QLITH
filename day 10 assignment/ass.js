// 1) Print only odd numbers from an array

let arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}
// 2) Count how many positive numbers are in an array

let numbers = [-2, 3, 5, -1, 6, 0];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        count++;
    }
}

console.log("Positive numbers count:", count);


// 3) Reverse an array using a loop

let array = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
}

console.log(reversed);


// 4) Print the factorial of a number


let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);


// 5) Count vowels in a string using a loop

let str = "javascript";
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    }
}

console.log("Vowel count:", vowelCount);


// 6) Find the largest number in an array using a loop

let nums = [10, 45, 2, 99, 23];
let largest = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
        largest = nums[i];
    }
}

console.log("Largest number:", largest);


// 7) Print the Fibonacci series up to n terms

let n = 7;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}


// 8) Remove duplicate values from an array using loops only

let arrDup = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arrDup.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
        if (arrDup[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        uniqueArr.push(arrDup[i]);
    }
}

console.log(uniqueArr);


// 9) Check if a number is prime using a loop

let number = 7;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime number" : "Not a prime number");



// 10) Print the pattern using loops

// *
// **
// ***
// ****
// *****



let rows = 5;
let pattern = "";

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);
