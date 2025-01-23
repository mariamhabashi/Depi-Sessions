/*Functions*/
//User Defined
//No parameters
function myFunction(){
    document.write("Welcome!"+"<br>");
}
//Calling
myFunction();
myFunction();
myFunction();

//Single parameter
function sayHello(name){
    document.write("Hello!" + name + "<br>")
}
//Calling
sayHello("Mariam");
sayHello("Shrouq");

//Multiple Parameters
function sayHi(name,age){
    document.write("Hi " + name + ", your age : "+age+"<br>");
}
//Calling
sayHi("Shrouq",18);

//Return
function mySum(a,b){
    return a+b;
}
//Calling
var c = mySum(5,7);
document.write(c,"<br>");
//OR
function myAdd(a,b){
    var c=a+b;
    return c;
}
//Calling
document.write(myAdd(4,7),"<br>");

//Task 1: function subtract 2 numbers
function mySubt(a,b){
    var c=a-b;
    document.write(c,"<br>");
}
//Callig
mySubt(10,4);

//Task 2: function Multiply 2 numbers
function myMult(a,b){
    var c=a*b;
    document.write(c,"<br>");
}
//Callig
myMult(4,6);

//Task 3:function test
//if a > b  --> a*b
//else b > a --> b/a
function mytest(a,b){
    if(a>b){
        document.write("The multiplication of ",a," and ",b," = ",a*b ,"<br>");
    }
    else{
        if(a!=0){
        document.write("The Divition of ",b," over ",a," = ",b/a,"<br>");
        }
        else{
            document.write("Math Error","<br>");
        }
    }
}
//Calling
mytest(2,5);
mytest(5,3);
mytest(0,9);

//Task 4: function max of 2 numbers
function mymax(a,b){
    if(a>b){
        document.write("The maximum number of 2 numbers = "+a,"<br>");
    }
    else if(a<b){
        document.write("The maximum number of 2 numbers = "+b,"<br>");
    }
    else{
        document.write("The 2 numbers are equal","<br>");
    }
}
mymax(2,9);
mymax(2,2);

//Task 5: function min of 2 numbers
function mymin(a,b){
    if(a<b){
        document.write("The minimum number of 2 numbers = "+a,"<br>");
    }
    else if(b<a){
        document.write("The minimum number of 2 numbers = "+b,"<br>");
    }
    else{
        document.write("The 2 numbers are equal","<br>");
    }
}
mymin(2,9);
mymin(2,2);

//Task 6: function test offer units
//if units < 5 --> increment units to 5
//else --> return units
function myunits(units){
    if(units<5){
        return 5;
    }
    else{
        return units;
    }
}
document.write("your offer units ",myunits(4),"<br>");
document.write("your offer units ",myunits(12),"<br>");
