#!/usr/bin/node
// Write a function that prints the number of arguments already printed and the new argument value
const ArgsPrinted = [];
exports.logMe = function (item) {
  let count = 0;
  ArgsPrinted.forEach(Element => {
    count++;
  });
  ArgsPrinted.push(item);
  console.log(count + ': ' + item);
};
