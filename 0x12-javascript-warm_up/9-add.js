#!/usr/bin/node

function add (a, b) {
<<<<<<< HEAD
	  return (a + b);
}

if (process.argv.length < 4) {
	  console.log('NaN');
} else {
	  console.log(add(parseInt(process.argv[2]), parseInt(process.argv[3])));
=======
  return (a + b);
}

if (process.argv.length < 4) {
  console.log('NaN');
} else {
  console.log(add(parseInt(process.argv[2]), parseInt(process.argv[3])));
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
}
