#!/usr/bin/node
const myObject = {
<<<<<<< HEAD
	  type: 'object',
		  value: 12
};
console.log(myObject);
myObject.incr = function () {
	  this.value++;
=======
  type: 'object',
  value: 12
};
console.log(myObject);
myObject.incr = function () {
  this.value++;
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
};
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
