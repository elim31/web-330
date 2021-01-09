/*
============================================
; Title: Exercise 1.3
; Author: Richard Krasso
; Date: 5 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 1.3
;===========================================
*/ 
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 1.3") + "\n");

//start program

/**
 * Params: manufacturer, model, color, price
 * Response:  
 * Description: Create a cell phone object with the following properties / methods 
 */
function cellPhone(manufacturer, model, color, price){

    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;


    //getPrice() function
    this.getPrice = function(){
        return this.price;
    }

    //getModel() function
    this.getModel = function(){
        return this.model;
    }

    //getDetails() function
    this.getDetails = function(){
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() +
        "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}
var cellPhone = new cellPhone("Apple", "XS Max", "Blush Gold", "1299.99"); //Instantiate a new cell phone object with own default values
console.log("-- DISPLAYING CELL PHONE DETAILS --")
console.log(cellPhone.getDetails()) //call the getDetails() function.

//end program