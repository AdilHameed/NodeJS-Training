// mkdir foldername ----> for folder creation
// cd foldername ---> to move to newly created folder
// code . ---> to open that folder in vsCode
// npm init ---> to create package.json
// Added script for npm start - "start": "node index.js" --- in package.json file
// npm i moduleName ---> for installing any 3rd party modules like nodemon

// creating server without using any library

const http = require("http");
const { readStream } = require("./Stream.js");
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  //   readStream.pipe(res);
  const data = {
    name: "XYZ",
    age: 23,
    address: "9/sangam vihar",
    city: "Delhi",
  };
  res.end(JSON.stringify(data));
});

server.listen(PORT, (req, res) => {
  console.log("server is up and running");
});

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.end("Welcome to ExpressJs");
// });

// app.listen(PORT, (req, res) => {
//   console.log("server is up and running");
// });

// let time = 0;
// const timer = setInterval(() => {
//   time += 2;
//   if (time > 6) {
//     clearInterval(timer);
//   }
//   console.log(`${time} have passed`);
// }, 2000);

// console.log(__dirname); //tell the directory where I am
// console.log(__filename); //gives the directory as well as current file

// const data = require("./file1.js");
// const { a, func1, sum } = require("./file1.js"); //destructurring

// // console.log(data.a);
// // data.func1("fissionite");

// console.log(a);
// func1("fissionites");

// console.log(sum.addFunc(sum.PI, 4));

// require("./emitterFile.js");
// require("./fileSys.js");
// require("./Stream.js");
