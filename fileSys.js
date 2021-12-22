const fs = require("fs");
//synchronously file reading wrting

// fs.writeFileSync("writeFile.txt", "This is my first file where I am writing");
// const readFile = fs.readFileSync("writeFile.txt", "utf8");

// console.log(readFile);

// console.log("End of writing reading");

//asynchronous file system
// const data = "This is my asynchronous file";
// fs.writeFile("asyncFile.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("successfully wrote");
// });
// fs.readFile("asyncFile.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// console.log("End of writing asynchronous file");

// try {
//   if (fs.existsSync("asyncFile.txt")) {
//     fs.unlinkSync("asyncFile.txt");
//   } else {
//     console.log("asyncFile doesnt exist");
//   }
//   if (fs.existsSync("writeFile.txt")) {
//     fs.unlinkSync("writeFile.txt");
//   } else {
//     console.log("writeFile doesnt exist");
//   }
// } catch (err) {
//   console.log("Error :", err);
// }

//make Directory
// fs.mkdir("itemsDir", () => {
//   fs.readFile("writeFile.txt", "utf8", (err, data) => {
//     fs.writeFile("./itemsDir/item.txt", data, (err) => {
//       if (err) console.log("Cannot write file");
//     });
//   });
// });

//delete directory

fs.exists("./itemsDir/item.txt", (exists) => {
  if (exists) {
    fs.unlink("./itemsDir/item.txt", () => {
      fs.rmdir("itemsDir", () => {
        console.log("Deleted Successfully");
      });
    });
  } else {
    console.log("No such directory exist");
  }
});
