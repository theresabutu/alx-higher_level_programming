#!/usr/bin/node

let size = parseInt(process.argv[2]);
if (isNaN(size) || process.argv[2] === undefined) {
<<<<<<< HEAD
	  console.log('Missing size');
}
let pstr = 'X';
for (let i = 0; i < size - 1; i++) {
	  pstr += 'X';
}
while (size > 0) {
	  console.log(pstr);
	    size--;
=======
  console.log('Missing size');
}
let pstr = 'X';
for (let i = 0; i < size - 1; i++) {
  pstr += 'X';
}
while (size > 0) {
  console.log(pstr);
  size--;
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
}
