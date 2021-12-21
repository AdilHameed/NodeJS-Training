// mkdir foldername ----> for folder creation
// cd foldername ---> to move to newly created folder
// code . ---> to open that folder in vsCode
// npm init ---> to create package.json
// Added script for npm start - "start": "node index.js" --- in package.json file
// npm i moduleName ---> for installing any 3rd party modules like nodemon

// creating server without using any library

const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.end("Welcome to nodeJs");
});

server.listen(PORT, (req, res) => {
  console.log("server is up and running");
});
