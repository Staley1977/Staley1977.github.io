var my_name;
var my_age;
var my_birthdate;

my_name="Stackup";
my_age=23;
my_birthdate="20/03/1988"

console.log(my_name);
console.log(my_age);
console.log(my_birthdate);

var my_address = "JTC Launchpad";

var my_test;

console.log(typeof(my_name));
console.log(typeof(my_test));

var firstName;
var lastName;

firstName="Nick";
lastName="Test";

var fullName=firstName+lastName;

console.log(typeof(fullName));
console.log(fullName);

var space;
space=" ";
var fullerName=firstName+space+lastName;

console.log(fullerName);

var fullerName=firstName+" "+lastName;

var qty=2;
var total=200;
var qtyTotal = qty+total;

console.log(qtyTotal);

var firstNumber;
var secondNumber;
var totalNumber;

firstNumber=10;
secondNumber=8;
totalNumber=firstNumber * secondNumber;

console.log(totalNumber);

var compareResult;

compareResult = (firstNumber == secondNumber);

console.log(compareResult);

thirdNumber=10;
fourthNumber="10"
testResult=(thirdNumber==fourthNumber);

console.log(testResult);

testResult=(thirdNumber===fourthNumber);

console.log(testResult);

testResult=(thirdNumber!=fourthNumber);

console.log(testResult);

testResult=(thirdNumber!==fourthNumber);

console.log(testResult);

var myHtmlValue;
myHtmlValue=document.getElementById("my_name").value;
console.log(myHtmlValue);