#!/usr/bin/node

function factorial (a) {
<<<<<<< HEAD
	  if (a <= 0) {
		      return 0;
		        } else if (a === 1) {
				    return 1;
				      } else {
					          return (a * factorial(a - 1));
						    }
=======
  if (a <= 0) {
    return 0;
  } else if (a === 1) {
    return 1;
  } else {
    return (a * factorial(a - 1));
  }
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
}

const myInt = parseInt(process.argv[2]);
if (isNaN(myInt)) {
<<<<<<< HEAD
	  console.log('1');
} else {
	  console.log(factorial(myInt));
}

=======
  console.log('1');
} else {
  console.log(factorial(myInt));
}
>>>>>>> 4e5659750a944b65cb92040c47024d92e75a9557
