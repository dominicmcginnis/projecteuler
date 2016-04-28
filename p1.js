var limit=1000;
var sum3=0;
var i=0;
while(i < limit) {
	if(i%5 !=0) { 
		sum3 += i;
	}
	i=i+3;
}
console.log(sum3);

var sum5 = ((limit - 5) * (limit / 10));

console.log(sum5);

var total = sum5+sum3;
console.log("Total: " + total);


