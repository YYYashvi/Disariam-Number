// function Yashvi(){
// var number = document.getElementById("InNumber").value;
// //alert(number);
// var length = number.toString().length;
// //alert(length);
// var i = 0;
// var exponent = length;
// var sum = 0;
// var InputNumber = number;
// while (i < length) {
//  var rem  = number % 10;
// var Power = Math.pow(rem,exponent);
// //alert(Power);
// sum = sum + Power;
// exponent--;
// number = Math.floor(number / 10);
// i++;
// }

// if (InputNumber == sum) 
// {
//   alert(InputNumber + " is a disariam number");
// } 

// else {
//  alert(InputNumber + " is not a disariam number"); 
// }

// }


var num;

function digit_count(a){
var c = 0;
while(a!=0){
	a=Math.floor(a/10);
	c= c+1;
}
return c;
}
//console.log(digit_count(135));

function check(n){

var Count= digit_count(n);
var sum=0;
var x = n;

while(x!==0){
var r = Math.floor(x%10);
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