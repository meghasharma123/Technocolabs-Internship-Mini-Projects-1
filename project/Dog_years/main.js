var myAge = 20;//This is variable which stores my age in it.

var earlyYears = 2;// This is a variable which stores the age untill which god grews yours ages 10 times that is 2 years of their early age.

var lateYears = myAge - earlyYears;//Now the left years are known as late years.

lateYears *= 4;//This is calculation to know thw dog years accounted by my late years.

console.log(earlyYears);
console.log(lateYears);

var myAgeInDogYears = earlyYears+lateYears;// summation of years gives mine dog years age. 

var myName = "Khusi".toLowerCase();//Store my name in a variable with all letters in small.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)