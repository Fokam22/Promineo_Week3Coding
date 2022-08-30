//Step 1
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log( ages[ages.length -1] - ages[0]);
ages.push(34);
console.log( ages[ages.length -1] - ages[0]);

var sumAge = 0
for (let age of ages) {
    
    sumAge +=  age;
}
console.log(sumAge / ages.length);


//Step 2
var letters = 0;
var names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
for ( let name of names )  {
     letters += name.length;
}
console.log(letters/names.length);

var sum = "";
for ( let name of names) {
    sum += name + " ";
}

console.log(sum);


//Step 5
var nameLengths = [];

for (var i =  0; i < names.length; i++) {
    nameLengths [i] = names[i].length;
}
console.log(nameLengths);

//ste 6
var total = 0;
for (let num of nameLengths) {
     total += num;
}
console.log(total);

//step 7
function myFunction7(word, n) {
    var newWord = "";
    for (var i = 1; i <= n; i++) {
        newWord += word;
    }
    return newWord;
}
//Testing result
console.log(myFunction7("Hello", 4));

//Step 8
function myFunction8 (firstName, lastName) {
    return firstName + " " + lastName;
}
//testing result
console.log(myFunction8("Liticia", "Fokam"));

//step 9
function myFunction9(arr) {
    var total = 0;
    for (let num of arr)
    total += num;
    return total;
}
//testing result
let myArray = [1, 2, 3,4];
console.log(myFunction9(myArray));

//step 10
function myFunction10(arr) {
    var total = 0;
    for (let num of arr)
    total += num;
    return (total/arr.length);
}

//Testing resullt
console.log(myFunction10(myArray));

//Step 11
function myFunction11(arr1, arr2) {
    var total1 = 0;
    var total2 = 0;
    for (let num1 of arr1)
    total1 += num1;

for (let num2 of arr2) {
    total2 += num2;
}
return total1/arr1.length > total2/arr2.length;
}
//Testing result
let myArray1 = [1, 2, 3, 100];
let myArray2 = [5, 6, 7, 8];
console.log(myFunction11(myArray1, myArray2));

//Step 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    return (isHotOutside === true && moneyInPocket > 10.50)
}
//Testing result
console.log(willBuyDrink(true, 100));


//Step 13
/* Wrting a function that tells me if I have enough money to buy a drink
return, "You are all set!" if true and reeturn "You do not have enough 
money, you need:...more"" when false.*/
//whatIhave is how much I have  -  needed - how much I need
function myFunction13(whatIhave, needed) {
    if (whatIhave >= needed)
    return "You are all set!"
    else return "You do not have enough money, you need " + (needed - whatIhave) + " more";
}
//Testing result
console.log(myFunction13(4000, 26000));