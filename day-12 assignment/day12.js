// 1) Create an array of 5 fruits & print first and last elements

let fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 2) Add "Mango" to end & "Kiwi" to start

fruits.push("Mango");
fruits.unshift("Kiwi");

console.log(fruits);


// 3) Remove first & last elements

fruits.shift(); // removes first
fruits.pop();   // removes last

console.log(fruits);


// 4) Find length of an array without using .length

let count = 0;

for (let i in fruits) {
    count++;
}

console.log("Array length:", count);


// 5) Find position of "Banana" using indexOf()

let position = fruits.indexOf("Banana");
console.log("Banana index:", position);


// 6) Check if "Orange" exists using includes()

let exists = fruits.includes("Orange");
console.log("Orange exists:", exists);


// 7) Convert [1,2,3,4,5] into string using join("-")

let numbers = [1, 2, 3, 4, 5];
let result = numbers.join("-");

console.log(result);


// 8) Remove duplicates from [1, 2, 3, 2, 1, 4, 5]

let arr = [1, 2, 3, 2, 1, 4, 5];
let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}

console.log(unique);


// 9) Return the string with the longest length

let words = ["Apple", "Banana", "Pineapple", "Mango"];
let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log("Longest word:", longest);


// 10) Create new array with length of each string

let tech = ["React", "Node", "MongoDB"];
let lengths = [];

for (let i = 0; i < tech.length; i++) {
    lengths.push(tech[i].length);
}

console.log(lengths);


// 11) Convert [1,2,3,4,5] → [5,10,15,20,25]

let nums = [1, 2, 3, 4, 5];
let multiplied = [];

for (let i = 0; i < nums.length; i++) {
    multiplied.push(nums[i] * 5);
}

console.log(multiplied);


// 12) Replace all negative numbers with 0

let values = [4, -2, 6, -9, 7];

for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        values[i] = 0;
    }
}

console.log(values);
