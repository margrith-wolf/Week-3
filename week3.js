//Create an array called "ages" that contains the values below

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element from the value in the last element of the array

function addFirstAndLast(data) {
    let first = data[0];

    let last = data[ages.length - 1];

    return last - first;
}

console.log(addFirstAndLast(ages)); //returns 90

//Add a new age to "ages" array and repeat the step above to ensure it is dynamic.

ages.push(42);

console.log(addFirstAndLast(ages)); //returns 39

//Use a loop to iterate through the "ages" array and calculate the average age.

function findAverage(data){
    let total = 0;

    for (let i = 0; i < ages.length; i++){
        total = total + data[i];
    }
    console.log(total); //returns 272

    let average = total / data.length;
    return Math.round(average); 

} console.log(findAverage(ages)); //returns 30 (unrounded value is 30.222222)

//Create an array called "names" that contains the values below

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Use a loop to iterate through the array and calculate the average number of letters per name

function findAverageLetters(data){
    let charSum = 0;

    for (let i = 0; i < names.length; i++){
        charSum = charSum + data[i].length;
    } 
    console.log(charSum); //returns 23
    
    let averageLength = charSum / data.length;
    return Math.round(averageLength);

} console.log(findAverageLetters(names)); //returns 4 (unrounded value is 3.8333333)

//Use a loop to iterate through the array and concatenate all the names together, separated by spaces

let element = "";
for (let i = 0; i < names.length; i++){
    element = element + names[i] + " ";
}
console.log(element); //returns Sam Tommy Tim Sally Buck Bob

//How do you access the last element of any array?

console.log("Use <array>.length - 1 to access the last element of an array");

//How do you access the first element of any array?

console.log("Use array[0] to access the first element in an array");

/*Create a new array called "nameLengths". 
Write a loop to iterate over the previously created "names" array and add the length of each name to the "nameLengths" array.*/

let nameLengths = [];

    for (let i = 0; i < names.length; i++){
        let letterLength = names[i].length;
        //console.log(letterLength);
        nameLengths.push(letterLength);
    } 
    console.log(nameLengths); //returns new array "nameLengths" with elements: 3, 5, 3, 5, 4, 3

//Write a loop to iterate over the "nameLengths" array and calculate the sum of all the elements in the array.

total = 0;

for (let i = 0; i < nameLengths.length; i++){
    total = total + nameLengths[i];
}
console.log(total); //returns 23

/*Write a function that takes two parameters, word and n, as arguments
and returns the word concatenated to itself n number of times*/

function helloWorld (word, n) {
    let string = word.repeat(n);
    return string;
} 
console.log(helloWorld("Hello", 3)); //returns HelloHelloHello

//Write a function that takes two parameters, firstName and lastName, and returns a full name.

function fullName (firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}
console.log(fullName("John", "Doe")); //returns John Doe

/*Write a function that takes an array of numbers and returns true 
if the sum of all the numbers in the array is greater than 100*/

let array = [20, 21, 22, 23]; //sum of array = 86, function should return false

function bigNumbers (data) {
    let total = 0;

    for (let i = 0; i < array.length; i++){
        total = total + data[i];
    }
    //console.log(total);

    if (total > 100) {
        total = true;
        return total;
    } else {
        total = false;
        return total;
    };
}
console.log(bigNumbers(array)); //returns false

/*Write a function that takes an array of numbers 
and returns the average of all the elements in the array*/

function findFirstAverage (data){
    let total = 0;

    for (let i = 0; i < array.length; i++){
        total = total + data[i];
    }
    console.log(total); //returns 86

    let firstAverage = total / data.length;
    return Math.round(firstAverage); 

} 
let average1 = findFirstAverage(array);
console.log(average1); //returns 22 (unrounded value is 21.5)

/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array
is greater than the average of the elements in the second array*/

let array2 = [5, 6, 7, 8];

function findSecondAverage (data) {
    let total = 0;

    for (let i = 0; i < array2.length; i++){
        total = total + data[i];
    }
    console.log(total); //returns 26

    let secondAverage = total / data.length;
    return Math.round(secondAverage); 
    
}
let average2 = findSecondAverage(array2);
console.log(average2); //returns 7 (unrounded value is 6.5)

function compareAverages (average1, average2) {
    if (average1 > average2) {
        return true;

    } else {
        return false;
    }
} console.log(compareAverages(average1, average2)); //returns true (as average 1 (22) is greater than average 2 (7) 

/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
and returns true if it is hot outside and if moneyInPocket is greater than 10.50*/

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
} console.log(willBuyDrink(true, 11.00)); //returns true

/*Create a function of your own that solves a problem

This function takes a boolean fullyRecovered and a number temperatureOutside and returns true
if fully recovered AND temperature outside is greater than or equal to 60*/

function willRide (fullyRecovered, temperatureOutside) {
    if (fullyRecovered === true && temperatureOutside >= 60) {
        return true;
    } else {
        return false;
    }
} console.log(willRide(true, 48)); //returns false