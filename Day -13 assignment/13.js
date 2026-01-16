// Q1. Print each number multiplied by 2 using forEach
const nums1 = [1, 2, 3, 4, 5];

nums1.forEach(num => {
  console.log(num* 2);
});

// Q2. Calculate the sum using forEach (without reduce)
const nums2 = [10, 20, 30, 40];
let sum = 0;

nums2.forEach(num => {
  sum += num;
});

console.log(sum);

// Q3. Print each user's name using forEach
const users1 = [
  { name: "A", age: 21 },
  { name: "B", age: 25 },
  { name: "C", age: 19 }
];

users1.forEach(user => {
  console.log(user.name);
});

// Q4. Count how many numbers are even using forEach
const nums3 = [1, 2, 3, 4, 6, 7, 8];
let evenCount = 0;

nums3.forEach(num => {
  if (num % 2 === 0) {
    evenCount++;
  }
});

console.log(evenCount);


// Q5. Convert an array into an array of squares using map
const nums = [1, 2, 3, 4, 5];

const squares = nums.map(num => num * num);

console.log(squares);

// Q6. Return an array of string lengths using map
const words = ["apple", "banana", "kiwi"];

const lengths = words.map(word => word.length);

console.log(lengths);

// Q7. Return only ages from an array of user objects
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 }
];

const ages = users.map(user => user.age);

console.log(ages); // [20, 30]

// Q8. Add tax: 10% to each product object using map
// Example input:
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 }
];


const productsWithTax = products.map(product => {
  return {
    ...product,
    tax: product.price * 0.10
  };
});

console.log(productsWithTax);

// Q9. Return only even numbers using filter
const nums5 = [1, 2, 3, 4, 5, 6];

const evenNumbers = nums5.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

// Q10. Filter out strings with length ≤ 3
const words1 = ["hi", "hello", "yes", "sun", "javascript"];

const longWords = words1.filter(word => word.length > 3);

console.log(longWords); // ["hello", "javascript"]

// Q11. Return students with marks ≥ 50
const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 30 },
  { name: "C", marks: 50 }
];

const passedStudents = students.filter(student => student.marks >= 50);

console.log(passedStudents);

// Q12. Return only products that are in stock
const products1 = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true }
];

const inStockProducts = products1.filter(product => product.inStock);

console.log(inStockProducts);

// Q13. Find the total sum using reduce
const nums6 = [10, 20, 30, 40];

const totalSum = nums6.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalSum); // 100

// Q14. Count how many odd numbers using reduce
const nums7 = [1, 2, 3, 4, 5, 7, 8];
  
const oddCount = nums7.reduce((count, num) => {
  if (num % 2 !== 0) {
    count++;
  }
  return count;
}, 0);

console.log(oddCount);

// Q15. Convert array to frequency object
const nums8 = [1, 2, 2, 3, 1];

const frequency = nums8.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(frequency);
// { 1: 2, 2: 2, 3: 1 }

// Q16. Find the maximum number using reduce
const nums9 = [5, 12, 8, 21, 3];

const maxNumber = nums9.reduce((max, curr) => {
  return curr > max ? curr : max;
}, nums9[0]);

console.log(maxNumber); // 21

// Q17. Check if array contains any number greater than 50
const nums13 = [10, 25, 60, 30];

const hasGreaterThan50 = nums13.some(num => num > 50);

console.log(hasGreaterThan50); // true

// Q18. Check if any product has price > 1000
const products7 = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 }
];

const expensiveProduct = products7.some(product => product.price > 1000);

console.log(expensiveProduct); // true

// Q19. Check if any student has failed (marks < 35)
const students6 = [
  { name: "A", marks: 80 },
  { name: "B", marks: 30 },
  { name: "C", marks: 60 }
];

const hasFailedStudent = students6.some(student => student.marks < 35);

console.log(hasFailedStudent); // true

// Q20. Check if all elements are positive integers
const nums12 = [1, 5, 10, 3];

const allPositive = nums12.every(num => num > 0 && Number.isInteger(num));

console.log(allPositive); // true

// Q21. Check if all names are strings
const names = ["Alice", "Bob", "Charlie"];

const allStrings = names.every(name => typeof name === "string");

console.log(allStrings); // true

// Q22. Check if all users are adults (age ≥ 18)
const users4 = [
  { name: "A", age: 21 },
  { name: "B", age: 18 }
];

const allAdults = users4.every(user => user.age >= 18);

console.log(allAdults); // true


// Q23. Find the first even number
const nums11 = [1, 3, 5, 8, 10];

const firstEven = nums11.find(num => num % 2 === 0);

console.log(firstEven); // 8

// Q24. Find first student who scored more than 90
const students1 = [
  { name: "A", marks: 85 },
  { name: "B", marks: 92 },
  { name: "C", marks: 88 }
];

const topper = students1.find(student => student.marks > 90);

console.log(topper);

// Q25. Find the product whose id is 5
const products3 = [
  { id: 1, name: "Pen" },
  { id: 5, name: "Book" },
  { id: 7, name: "Bag" }
];

const product = products3.find(p => p.id === 5);

console.log(product);

// Q26. Find the first string with length > 5
const words3 = ["cat", "apple", "banana", "kiwi"];

const longWord = words3.find(word => word.length > 5);

console.log(longWord); // "banana"