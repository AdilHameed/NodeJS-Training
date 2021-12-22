const fs = require("fs");
let i = 1;
module.exports.readStream = fs.createReadStream(
  __dirname + "/readableData.txt",
  "utf-8"
);
module.exports.writeStream = fs.createWriteStream(__dirname + "/writeData.txt");

// readStream.on("data", (chunksData) => {
//   let str = "";
//   if (i === 1) {
//     str = "st";
//   } else if (i === 2) {
//     str = "nd";
//   } else if (i === 3) {
//     str = "rd";
//   } else {
//     str = "th";
//   }
//   console.log(`${i + str} chunks received`);
//   writeStream.write(chunksData, (err) => {
//     if (err) console.log("Writing data failed");
//     else console.log("Data written successfully");
//   });
//   i++;
// });
