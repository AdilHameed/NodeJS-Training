// console.log("a = ", global.a);

exports.a = "Hello there";

exports.func1 = (name) => {
  console.log(`hello ${name}`);
};

const PI = 3.17;

const addFunc = (a, b) => {
  return `sum is ${a + b}`;
};

// exports.PI = PI;
// exports.addFunc = addFunc;
module.exports.sum = { PI, addFunc };
