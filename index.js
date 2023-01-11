// with method
// let string = "javacsript";
// let reverseString = string.split('').reverse().join();
// console.log(reverseString)

// without method

let string = 'javaScript';

let reverseString = '';

for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string[i];
}
console.log(reverseString);
