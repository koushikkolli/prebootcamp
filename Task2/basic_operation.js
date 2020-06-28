// Square of a number 
var num = 31;
var squareNum = 31*31;
console.log(squareNum);

// Swapping two numbers
var variableOne = 12;
var variableTwo = 15;
var temp = variableOne;
variableOne = variableTwo;
variableTwo = temp
console.log(variableOne, variableTwo)

// Adding three numbers
var num1 = 10;
var num2 = 17;
var num3 = 13;
var sum = num1 + num2 + num3;

// Coverting temperature from Celsius to Fahrenheit 
var temperatureInCelsius = 12;
var temperatureInFahrenheit = (temperatureInCelsius*(9/5)) + 32;
console.log(temperatureInFahrenheit);

// Convert Meters to Miles
var lengthInMeters = 2000;
var lengthInMiles = lengthInMeters/1609;
console.log(lengthInMiles.toFixed(2));

// Convert pounds to kilograms
var weightInPounds = 100;
var weightInKilograms = weightInPounds/2.205;
console.log(weightInKilograms.toFixed(3));

// Calculate batting average
var match1 = 87;
var match2 = 45;
var match3 = 56;
var numberOfMatches = 3;
var battingAverage = (match1 + match2 + match3)/numberOfMatches;
console.log(battingAverage.toFixed(2));

// Test score average 
var test1 = 67;
var test2 = 89;
var test3 = 78;
var test4 = 95;
var test5 = 81;
var scoreAverage = (test1 + test2 + test3 + test4 + test5)/5;
console.log(scoreAverage);

// Power of any number
var number = 2;
var power = 4;
var numberPower = Math.pow(number, power);
console.log(numberPower);

// Simple Interest calculation
var principalAmount = 2000;
var rate = 0.05;
var time = 3;
var simpleInterest = principalAmount*rate*time;
console.log(simpleInterest);

// Calculate area of equilateral triangle
var side = 5;
var area  = (Math.sqrt(3)*side*side)/4;
console.log(area.toFixed(2));

// Calculate area of isosceles triangle
var base = 5;
var height = 7;
var isoscelesArea = (base*height)/2;
console.log(isoscelesArea.toFixed(2));

// Calculate volume of sphere
var radius = 3;
var sphereVolume = (4/3)*Math.PI*radius*radius*radius;
console.log(sphereVolume.toFixed(3));

// Calculate volume of prism
var triangleBase = 4;
var triangleHeight = 5;
var prismHeight = 8;
var prismVolume = (1/2)*triangleBase*triangleHeight*prismHeight;
console.log(prismVolume);

// Calculate area of  triangle
var base = 5;
var height = 7;
var triangleArea = (base*height)/2;
console.log(triangleArea.toFixed(2));

// Calculate discount in percentage
var actualPrice = 1000;
var soldPrice = 900;
var discount = ((actualPrice - soldPrice)/actualPrice)*100;
console.log(discount+"%");

// Find diameter, circumference, area of a circle given radius
var radius = 3;
var diameter = 2*radius;
var circumference = 2*Math.PI*radius;
var circleArea = Math.PI*radius*radius;
console.log(diameter, circumference.toFixed(2), circleArea.toFixed(2));

// Performing all arithmetic operations
var num1 = 15;
var num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

// Print asterik pattern
var asterikPattern = "*****\r\n*****\r\n*****\r\n*****\r\n*****";
console.log(asterikPattern);

// Calculate electrity bill
var wattsPerHour = 100;
var costPerUnit = 10;
var totalConsumptioninKWh = (100/1000)*24*30;
var totalCost = totalConsumptioninKWh*costPerUnit;
console.log(totalCost.toFixed(2));

// Calculate CGPA
var grade1 = 8;
var grade2 = 6;
var grade3 = 9;
var grade4 = 8;
var grade5 = 10;
var cgpa = (grade1 + grade2 + grade3 + grade4 + grade5)/5;
console.log(cgpa.toFixed(1));


