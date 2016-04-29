//Sieve of Eratosthenes
//Make a list of all the integers less than or equal to n (greater than one) and strike out the multiples of all primes less than or equal to the square root of n, then the numbers that are left are the primes.

function findPrimes(value) {
    var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    var validPrimes = [];
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
        	validPrimes.push(i);
        }
    }   
    return validPrimes;
}

//finding Prime factors
function findPrimeFactors(value) {
	//Get the list of valid primes to ues
	//Load primes up to 1million (low primes) 
	//this avoids memory constraints...  We'll load more if necessary...
	var primes = findPrimes(1000000);
	console.log("Primes: " + primes);
	var quotient = value;
	var primeFactors = [];
	for(var i =0; i < primes.length; i++) {
		if(quotient % primes[i] === 0) {
			primeFactors.push(primes[i]);
			quotient = quotient / primes[i];
			//Make sure the next iteration continues with the same prime
			//so decrement before the increment from the loop
			i--;
		}
	}
	console.log("Final quotient: " + quotient);
	return primeFactors;
}

//100
//13195 
//600851475143 

var pf = findPrimeFactors(600851475143);
console.log("Prime Factors: " + pf);


