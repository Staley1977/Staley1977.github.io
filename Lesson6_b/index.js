function calculate1(){
   var myName="This is Stackup";
   console.log(myName); 
}
 
calculate1();

function getMyFullName1(){
    var firstName="Stackup";
    var lastName="One North";
    var fullName=firstName+" "+lastName;
    return fullName;
}

getMyFullName1();

var myFullName=getMyFullName1();
console.log(myFullName);

function calculate(myLocation1, myLocation2, myLocation3){
    var myName="This is Stackup, at " + myLocation1 + " " + myLocation2 + " " + myLocation3;
    console.log(myName); 
}

calculate("One North","JTC Launchpad");



function greet(firstName, lastName, bornYear){
    var age=2018-bornYear;
    var greetings="Hello, " + firstName + " " + lastName + ", " + age;
    console.log(greetings);
}

greet("Michael", "Jordan", "1990");
greet("Mauro", "Icardi", "2000");
greet("Lionel", "Messi", "1970");


function testMe(){
    alert("Hi you hit the button");
}