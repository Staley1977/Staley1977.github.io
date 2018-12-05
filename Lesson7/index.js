
//to get value of HTML element
// document.getElementById("firstNumber").value;

//to display value
// document.getElementById("result").value="";



function Calculate(){
    var first_number;
    var operator;
    var second_number;
    var total;
    
    first_number=document.getElementById("firstNumber").value;
    operator=document.getElementById("op").value;
    second_number=document.getElementById("secondNumber").value;

    if(operator=="+"){
        total=parseInt(first_number) + parseInt(second_number);
        console.log("Addition");
    }
    else if(operator=="-"){
        total=parseInt(first_number) - parseInt(second_number);
        console.log("Subtraction");
    }
    else if(operator=="*"){
        total=parseInt(first_number) * parseInt(second_number);
        console.log("Multiplication");
    }
    else if(operator=="/"){
        total=parseInt(first_number) / parseInt(second_number);
        console.log("Division");
    }

    document.getElementById("result").value=total;
}


//morning
//afternoon
//evening
var greet;

if(greet=="morning"){
    console.log("This is Morning");
}
else if(greet=="afternoon"){
    console.log("This is Afternoon");
}
else if(greet=="evening"){
    console.log("This is Evening"); 
}
else {
    console.log("Night Time")
}

var greetings = ["Morning","Afternoon","Evening"];
console.log(greetings); 
console.log(greetings.length);

console.log(greetings[2]);

var primeNumber = [1,3,5,7,9,12,15];
console.log(primeNumber[primeNumber.length-1]);

var step = 0;
while(step<primeNumber.length){

    console.log(primeNumber[step]);
    step=step+1;
}


var numbers = [1,2,3,4,5,6,7,8,9,10];

//exercise to display "Even Number" if even number
//or "Not Even Number"


step = 0;
while(step < numbers.length){

    var isEven = numbers[step] % 2;

    if(isEven == 0){
        console.log(numbers[step] + " is even number");
    } else {
        console.log(numbers[step] + " is not even number");
    }

    step = step + 1
}