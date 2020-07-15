var reg = false;
var age = 15;

var raceNumber = 0;

var min = 0;
var max = 1000;
var max2 = 100000;

if(age>=18){
   raceNumber = Math.floor(Math.random() *(+max2 + 1 - +max)) + +max ; 
}
else{
    raceNumber = Math.floor(Math.random() * (+max + 1 - +min)) + +min; 
}

if(age >= 18 && reg === true){
    raceNumber += 1000;
    console.log(`You can start their race at 9:30  and your race number is ${raceNumber}`);
}
else if(age >= 18 && reg === false){
    console.log(`You can start their race at 11:00  and your race number is ${raceNumber}`);
}
else{
    console.log(`You can start their race at 12:30  and your race number is ${raceNumber}`);
}

function fn1(){
    alert("Open the console");
}
