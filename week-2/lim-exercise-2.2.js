/*
============================================
; Title: Exercise 2.2
; Author: Richard Krasso
; Date: 12 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 2.2 Prototypes
;===========================================
*/ 
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 2.2") + "\n");

//start program

//Create an object literal Person with one function, getAge()
var person = {
    getAge:function()
    {
        return this.age; //The getAge() function should return the Person’s age
    }
};
//Create a new object literal, passing in the getAge() function
var robert = Object.create(person, {
    "age":                           //From within the new object literal define an age and fullname function
    {
        "value": "46"
    },
    "fullname":
    {
        "value": "Robert Schumann"
    }
});

robert.getAge();

console.log("The person's full name is '%s'.", robert.fullname); //Call the console.log() function and output the Persons fullname
console.log("The person's age is '%s'.", robert.getAge());  //Call the console.log() function and output the age (use the getAge() function)


// end program