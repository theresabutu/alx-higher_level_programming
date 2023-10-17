#!/usr/bin/node
// Write a function that returns the reversed version of a list:
exports.esrever = function (list) {
  const reversedList = [];
  for (let index = list.length - 1; index >= 0; index--) {
    reversedList.push(list[index]);
  }
  return reversedList;
};
