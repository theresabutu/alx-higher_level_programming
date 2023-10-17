#!/usr/bin/node

if (process.argv.length < 4) {
<<<<<<< HEAD
	  console.log('0');
} else {
	  const size = process.argv.length;
	    const ints = [];
	      for (let i = 2; i < size; i++) {
		          ints[i - 2] = parseInt(process.argv[i]);
			    }
	        ints.sort(function (a, b) { return b - a; });
		  console.log(ints[1]);
=======
  console.log('0');
} else {
  const size = process.argv.length;
  const ints = [];
  for (let i = 2; i < size; i++) {
    ints[i - 2] = parseInt(process.argv[i]);
  }
  ints.sort(function (a, b) { return b - a; });
  console.log(ints[1]);
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
}
