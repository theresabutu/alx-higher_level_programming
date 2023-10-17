#!/usr/bin/node
// Write a function that returns the number of occurrences in a list:
exports.nbOccurences = function (list, searchElement) {
  let ocurrences = 0;
  list.forEach(element => {
    if (element === searchElement) {
      ocurrences++;
    }
  });
  return ocurrences;
};
