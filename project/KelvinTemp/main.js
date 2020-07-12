const kelvin = 0;
// variable store the temperature in kelvin scale.
var Celsius = (kelvin - 273);
var fahrenheit = Celsius * (9/5) + 32;//converting celsius to fahrenheit

fahrenheit = Math.floor(fahrenheit);//rounding off the fahrenheit

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var Newton = Celsius * (33/100);
Newton = Math.floor(Newton);

console.log(`The temperature is ${Newton} degrees Newton.`)

