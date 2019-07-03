'use strict';

const fs = require('fs');


const selectedFile = process.argv.slice(2)[0];
let files = process.argv.slive(2);

let random = function(){
  return Math.floor(Math.random()*10);
};

let write = function(file){
  fs.appendFile(file, random(), (err,data) => {
    if(err) throw err;
    console.log('File Saved!!');

  });};

let read = function(file){
  
  fs.readFile(file, (err, data) => {
    if(err) throw err;
    console.log(data.toString());
  });};

read(selectedFile);
write(selectedFile);
read(selectedFile);

