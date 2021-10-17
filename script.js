const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
// [32, 57, 22]
// Task 1
// Print the name list - As an array
// Code :



let names = scores.map(x=>x.name);
console.log(names);


// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]


// Task 2
// >=40 pass.. find those student that passed (Use array method)

// Code:


let passed = scores.filter(x=>x.marks>40)
console.log(passed);


// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]



// Task 3
// Find all the names who failed the exams (Array methods)

// Code:
let failed = scores.filter(x=>x.marks<40).map(y=>y.name);
console.log(failed);




// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];

// Task 4
// Find the Average marks
// Code:


let sum = scores.map(x=>x.marks).reduce((a,b)=>a+b,0)
let avg = sum/scores.length;
console.log(avg);



// Task 5
// Find the topper's name

// Code:


let max = scores.reduce((a,b)=>a.marks>b.marks?a:b);
console.log(max.name);




// Expected Output
// "Debra Beard"



//  Only use
// map, reduce, filter & destructuring

// Task 6 - use es6
// Build -  intersection, uniq, without, groupBy
// https://lodash.com/docs/4.17.15#groupBy

// Intersection 



arr1 = [2, 1];
arr2 = [2, 3];

let intersection = arr1.filter(x=>arr2.includes(x));
console.log(intersection);


// Output:
// [ 2 ]

// Unique



arr1 = [2, 1,2, 3];
let unique = [...new Set(arr1)];
console.log(unique);


// Output:
// [ 2, 1, 3 ]

// without:



let arr = [1, 2, 3, 4, 5, 3];
let value = 2;

let without = arr.filter(x=>x != value);
console.log(without);


// Output:
// [ 1, 3, 4, 5, 3 ]

