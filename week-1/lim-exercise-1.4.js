/*
============================================
; Title: Exercise 1.4
; Author: Richard Krasso
; Date: 5 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 1.4
;===========================================
*/ 
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 1.4") + "\n");

//start program

//Create a function constructor Car class with one parameter (model)
function Car(model)
{
    this.model = model;
}
//Add a prototype method to each class called “start”. The prototype method should output “ added to the racetrack!” 
Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
};

//Create a function constructor Truck class with two parameters (model, year)
function Truck(model, year)
{
    this.model = model;
    this.year = year;
}
//Add a prototype method to each class called “start”.The prototype method should output “ added to the racetrack!” 
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
};
//Create a function constructor Jeep class with three parameters (model, year, color)
function Jeep(model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}
//Add a prototype method to each class called “start”. The prototype method should output “ added to the racetrack!” 
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
};

//Define an empty racetrack array
var racetrack = [];

//Create a driveIt function with one parameter (vehicle)
function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}
//Create three (3) vehicle classes 
var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018");
var wrangler = new Jeep("Wrangler", "2016", "White");

console.log("")

//Pass the 3 vehicle classes through the driveIt() function
driveIt(fordF150);
driveIt(celica);
driveIt(wrangler);

console.log('\n-- The following vehicles have been added to the racetrack--');
for (var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}
//end program