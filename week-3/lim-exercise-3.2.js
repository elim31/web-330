/*
============================================
; Title: Exercise 3.2
; Author: Richard Krasso
; Date: 20 Jan 2021
; Modified By: Eunice Lim
; Description: Exercise 3.2 The Factory Pattern
;===========================================
*/ 
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 3.2") + "\n");

// start program

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

/**
 * Params: 1 argument - properties
 * Description: 3 properties - username, password, and server
 */
function Informix(properties) {           
    this.username = properties.username || 'eulim';  //
    this.password = properties.password || 'unknown1';
    this.server = properties.server || 'localhost:3030';
}
/**
 * Params: 1 argument - properties
 * Description: 4 properties - username, password, server and version
 */
function Oracle (properties) {
    this.username = properties.username || 'eulim';   
    this.password = properties.password || 'unknown2';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '0.1.2';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;

    } 
    if (properties.databaseType === 'MySql'){  
        this.databaseClass = MySql;
    }
    //Update the createDatabase functions if…else block to handle the two newly created classes
    if (properties.databaseType === 'Oracle'){
        this.databaseClass = Oracle;
    }
    if (properties.databaseType === 'Informix'){
        this.databaseClass = Informix;
    }
    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: "MySql",
    username: "default",
    password: "password"
});
//Create a new oracleFactory 
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({  //call the createDatabase prototype function (supply your own default values)
    databaseType: "Oracle",
    username: "eulim",
    password: "PasSworD"
});

//Create a new informixFactory
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({   //call the createDatabase prototype function (supply your own default values)
    databaseType: "Informix",
    username: "eulim",
    password: "PasSworD1"
});

//Output the results
console.log(oracle);
console.log(" ");
console.log(informix);
// end program


