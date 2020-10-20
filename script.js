
function check(n){
var Count= n.toString().length;
var sum=0;
var x = n;

while(x!==0){
var r = x%10;
sum=Math.floor(sum + Math.pow(r, Count));
Count--;
x=Math.floor(x/10);
}
return (sum == n);
}


function Yashvi(){
	var num = document.getElementById("InNumber").value;
	var result= check(num)? " IS a disariam number":"NOT a disariam number";
	document.getElementById("resultDiv").innerHTML= num + " is " +result; 
}


function reset(){
	document.getElementById("InNumber").value="";
	document.getElementById("resultDiv").innerHTML="";
}

