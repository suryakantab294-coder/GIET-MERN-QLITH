// 1) Palindrome String

function isPalindrome(s) {
    let reversed = "";

    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }

    if (s === reversed) {
        return 1;
    } else {
        return 0;
    }
}

console.log(isPalindrome("abba")); // 1
console.log(isPalindrome("abc"));  // 0


// 2) Capitalize the first letter of each word

let str = "hello world javascript";
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
}

console.log(result.trim());


// 3) Write a function that takes a string and returns its length

function stringLength(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        count++;
    }

    return count;
}

console.log(stringLength("JavaScript"));


// 4) Convert a string to uppercase without using .toUpperCase()

let text = "javascript";
let upperText = "";

for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);

    if (code >= 97 && code <= 122) {
        upperText += String.fromCharCode(code - 32);
    } else {
        upperText += text[i];
    }
}

console.log(upperText);



// 5) Count the number of vowels in a string

let str1 = "javascript";
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < str1.length; i++) {
    if (vowels.includes(str1[i])) {
        count++;
    }
}

console.log("Vowel count:", count);


//  6) Arrow function that multiplies two numbers

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));
