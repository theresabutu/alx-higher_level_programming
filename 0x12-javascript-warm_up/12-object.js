#!/usr/bin/node
const myObject = {
<<<<<<< HEAD
	  type: 'object',
		  value: 12
=======
  type: 'object',
  value: 12
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
};
console.log(myObject);
myObject.value = 89;
console.log(myObject);
