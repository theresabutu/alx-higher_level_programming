#!/usr/bin/node

const myVar = parseInt(process.argv[2]);
if (process.argv[2] === undefined || isNaN(myVar)) {
<<<<<<< HEAD
	  console.log('Not a number');
} else {
	  console.log('My number: ' + myVar);
=======
  console.log('Not a number');
} else {
  console.log('My number: ' + myVar);
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
}
