document.write("Hello from JS");
document.write("<h1>Hello from JS</h1>");
var x =10;
var y =20;
document.write(x,"<br>",y,"<br>");
document.write(x+y,"<br>");
var z='Kero';
document.write("Hello, " +z);
document.write("<br>");
//Data Types
var num=40; //number
var price=55.55; //decimals
var name='Mariam'; //string
var text="JS is easy!"; //string
var isActive= true; //boolean
var isHoliday = false; //boolean

/*Operators*/
//Math
var x1=5;
var y1=10;
document.write(x1+y1);
document.write("<br>");
document.write(x1-y1);
document.write("<br>");
document.write(x1*y1);
document.write("<br>");
document.write(x1/y1);
document.write("<br>");
document.write(x1+y1);
document.write("<br>");
var x2=5;
var y2=11;
document.write(y2%x2);
document.write("<br>");
y1++;
document.write(y1);
document.write("<br>");
document.write(--y1)
document.write("<br>");

//Assignment
var x3=5;
var y3=10;
document.write(x3);
document.write("<br>");
var x4=5;
var y4=10;
x4+=y4; // x4=x4+y4

//+=
document.write(x4);
document.write("<br>");

// -= *= /= %=
var x5=20;
var y5=10;
x5-=y5; //x5 =x5-y5
document.write(x5);
document.write("<br>");

//Comparison
var z1=10;
document.write(z1==8);
document.write("<br>");
var z2='8';
document.write(z2==8);
document.write("<br>");
var z3='8';
document.write(z3===8);
document.write("<br>");
var z4=10;
document.write(z4!=8);
document.write("<br>");
var z5='8';
document.write(z5!==8);
document.write("<br>");
var x6=5;
var y6=10;
document.write(x6>y6);
document.write("<br>");
document.write(x6<y6);
document.write("<br>");

//Logical
//And &&
document.write((4>2)&&(10<5));
document.write("<br>");
//Or ||
document.write((4>2)||(10<5));
document.write("<br>");
//Not !
//Conditional Operator
//var =(condition) ? value1:value2
//var =logical ? true : false
var age=12;
var isAdult = (age<18) ? "young":"old";
document.write(isAdult);
document.write("<br>");

//String
//concat +
var mystring1="I am learning";
var mystring2="JavaScript";
document.write(mystring1+mystring2);
document.write("<br>");



