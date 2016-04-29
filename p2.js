var target = 4000000;
var prev = 0, next = 1;
var sumEven=0;
for (var val = prev+next; val <= target; val=prev+next) {
//	var val = prev+next;
//	console.log(val);
	if(val % 2 == 0) {	
		sumEven+=val;
	}
	prev=next;
	next=val;
}
console.log(sumEven);
