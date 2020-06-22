const addon = require("../build/Release/hello.node");

const value = addon.hello();

console.log(value);
