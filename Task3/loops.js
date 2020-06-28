// Print triangle using a loop
var printVal = "";
for(var i=0; i<7; i++){
    printVal = printVal + "#";
    console.log(printVal);
}

// Printing the contents of array
var strArray= ["<option>Jazz</option>"
      ,"<option>Blues</option>"
      ,"<option>New Age</option>"
      ,"<option>Classical</option>"
      ,"<option>Opera</option>"];
for(var i=0; i<strArray.length; i++){
    console.log(strArray[i]);
}

// Finding the legth of array without using legth function
var myarray = [11,22,33,44,55];
var count = 0;
for(var i=0; i<10; i++){
    if(myarray[i] !== undefined){
        count++;
    }
}
console.log(count);

// Defining and accessing foods
let foods = ["chicken", "prawns", "biriyani", "ice creams", "chocolates",
           "milkshakes", "pizza", "omlete", "dal", "kebabs", "garlic naan","chicken lolipop", "french fries", "dosa", "fried rice",
           "cakes", "Rasmalai", "fish fry", "sweet pudding", "Ladoo"];
            
console.log(foods[4]);
console.log(foods.length);

// Changing array values
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === "Mari"){
            input[i] = "Munnabai";
        }
    }
}
dataHandling(friends);
console.log(friends);

// Printing till CaptianAmerica
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === "CaptianAmerica"){
            console.log(input[i]);
            return;
        }
        console.log(input[i]);
    }
}
dataHandling(friends);

// Printing till CaptianAmerica
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === name){
            return true;
        }
    }
    return false;
}
let found = dataHandling(friends, "Jeff");
console.log(found)

// Merging and sorting arrays
let friends1 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

function dataHandling(input1, input2){
    result = input1.concat(input2);
    return result.sort();
}
console.log(dataHandling(friends1, friends2));

// Fetching first, middle and last elements of array
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var firstElement = friends[0];
var middleElement = friends[parseInt((0+friends.length -1)/2)]
var lastElement = friends[friends.length - 1];
console.log(firstElement, middleElement, lastElement);

// Adding a element to the begining and last
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
friends[friends.length] = "Koushik";
friends[0] = "Laksh";
console.log(friends);

// Adding Mr to all the elements
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
for(var i=0; i<friends.length; i++){
    friends[i] = "Mr " + friends[i];
}
console.log(friends);


// Join the array with comma
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function joinArray(input){
    return input.join(",")
}
console.log(joinArray(friends));

// Find strings with the letter a
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function findElementswitha(input){
    let friendsWithLettera = [];
    for(var i=0; i<input.length; i++){
        if(input[i].includes("a") || input[i].includes("a")){
            friendsWithLettera.push(input[i]);
        }
    }
    return friendsWithLettera;
}
console.log(findElementswitha(friends));

// Find the average length of all names 
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function findAverageLengthOfElements(input){
    let totalLength = 0;
    for(var i=0; i<input.length; i++){
        totalLength += input[i].length;
    }
    return totalLength/input.length;
}
console.log(findAverageLengthOfElements(friends))

// Find the string which starts with M
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function findElementsStartingWithM(input){
    let friendsWithStartingM = [];
    for(var i=0; i<input.length; i++){
        if(input[i].startsWith("M")){
            friendsWithStartingM.push(input[i]);
        }
    }
    return friendsWithStartingM;
}
console.log(findElementsStartingWithM(friends));

// Find the string with maximum length
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function findMaximumlength(input){
    let maxLength = 0;
    for(var i=0; i<input.length; i++){
        if(input[i].length > maxLength){
            maxLength = i;
        }
    }
    return input[maxLength];
}
console.log(findMaximumlength(friends));

// Find the string with minimum length
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function findMinimunlength(input){
    let minLength = 0;
    for(var i=1; i<input.length; i++){
        
        if(input[i].length < minLength){
            minLength = i;
        }
    }
    return input[minLength];
}
console.log(findMinimunlength(friends));

// Ataking average of only numbers in array
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
var sum = 0;
var count = 0;
for(var i=0; i<friendsInfo.length; i++){
    if(typeof(friendsInfo[i]) === "number"){
        sum += friendsInfo[i];
        count +=1;
    }
}
var average = sum/count;
console.log(average);

// Print the contents of input variable
var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        //Your code goes here
        var arr = input[i];
        for(var j=0; j<arr.length; j++){
            console.log(arr[j]);
        }
    }
}
dataHandling(input);

// Check for output

myobject = {1:one,"11":1,"name":"arun"}
console.log(myobject."11"); // compilation error
console.log(myobject.name);

// Add a key value pair to Object

myobject = {1:"one","11":1,"name":"arun"};
//your code goes here
myobject["ten"] = "ten";
console.log(myobject);



