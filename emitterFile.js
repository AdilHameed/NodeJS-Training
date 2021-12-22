const events = require("events");

const myEmmiter = new events.EventEmitter();
myEmmiter.on("someEvent", (msg) => {
  console.log(msg);
});

myEmmiter.on("someEvent", () => {
  console.log("Hello Emitter");
});

myEmmiter.emit("someEvent", "Hello there!");
