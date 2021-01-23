/*
============================================
; Title: Exercise 3.3
; Author: Richard Krasso
; Date: 21 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 3.3 The Factory Pattern
;===========================================
*/ 
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 3.3") + "\n");

// start program

//From starter code
var DatabaseSingleton = (function() {
    var instance;
  
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }
  
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  //Create a new function and name it databaseSingletonTest()
  function databaseSingletonTest(){
      var oracle = DatabaseSingleton.getInstance();         //Create two new database instances
      var postgres = DatabaseSingleton.getInstance();
      console.log ("Same database instance? %s ", oracle === postgres);  //Call the console.log() function and output whether the two instances match
  }
  //Call the databaseSingletonTest() function
  databaseSingletonTest();

  //end program