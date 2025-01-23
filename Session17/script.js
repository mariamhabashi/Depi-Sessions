/*Built in function*/
//Alert
//alert("Welcome!");

//Prompt >>> take input from the user
/*var user = prompt("Please enter your name");
alert("Hi! " + user);

//Confirm
var response = confirm("Do you want to leave the site?");
if(response==true){
    alert("Thanks for visiting us today!");
}
else{
    alert("Thanks for staying with us!");
}
*/
/*
Task 1: Create a function to calculate service fees
Case1:bill>200 --> fees 20%
Case2:bill<200 and > 100 --> fees 15%
case3:bill <100 --> fees 10%
*/

/*function service_fees(bill){
    if (bill>200){
        bill=bill*0.2;
        alert("Your fees = "+ bill);
    }
    else if(bill<200 && bill>100){
        bill=bill*0.15;
        alert("Your fees = "+bill);
    }
    else{
        bill=bill*0.1;
        alert("Your fees = "+bill);
    }
}
var indexbill = prompt ("Please enter your bill to calculate your fees");
var bill = parseFloat(indexbill);
service_fees(bill);*/

/*
Task 2: prompt(num1,num2) --> alert (sum)
parseint --> string to integer
parsefloat --> string to float
*/

/*var num1 = parseFloat(prompt("Enter the first number"));
var num2 = parseFloat(prompt("Enter the second number"));
alert("The summattion of the 2 numbers = "+ (num1+num2));
*/

/*Objects*/
//variables = container for data
//objects = container for named values
var person = {firstname:"Shrouq" , age:18 , height:157 , favdrink:"Iced Spanish Latte"};
var x =person.firstname;
var y =person.age;
var z =person.favdrink;
document.write(x +" is "+ y +" years old , and her favorite drink is "+z+"<br>");

var course = {crs:"JS" , lessons:20};
document.write(course.crs.length+"<br>");
document.write(course.length +"<br>");

//Object Constructor
function student(name , age , grade){
    this.name = name; //this.prperty = value(parameter)
    this.age = age;
    this.grade = grade;
}
var s1 = new student("Mariam",21,3);
var s2 = new student ("Hassan" , 12 , 7);
document.write("Student 1 name : "+s1.name + "<br>");
document.write("Student 2 grade : "+s2.grade + "<br>");

//Adding methods 
function trainee(name,age){
    this.name=name;
    this.age=age;
    this.changeName = function(name){
        this.name=name;
    }
}
var t1 = new trainee("Omar",30);
document.write(t1.name + "<br>");
t1.changeName("Amr");
document.write(t1.name + "<br>");

function trainer(name,age){
    this.name=name;
    this.age=age;
    this.yearOfBirth = bornYear;
}
function bornYear(){
    return 2024-this.age;
}
var tr1 = new trainer("Fady" , 40);
document.write(tr1.yearOfBirth()+"<br>");

/*
Task 3: Create patient object function
parameters --> weight , height(cm/100)
method --> BMI (weight /(height*height))
*/
var BMI;
function patient(weight,height){
    this.weight=weight;
    this.height=(height/100);
    this.BMI=BMI(weight,height);
    document.write("Your BMI = " + this.BMI+"<br>")
}
function BMI(weight,height){
    return (weight /Math.pow(height,2));
}
patient(48,160);

//Core Objects
//Array
var courses = new Array("Data Science" , "Database" , "Data Structure" , "Data Mining");
document.write(courses[0],"<br>");
//another way to define array
var subjects = new Array(3);
subjects[0]="Math";
subjects[1]="English";
subjects[0]="Arabic";
//another way to define array
var cars = new Array();
cars[0]="BMW";
cars[1]="Toyota";
cars[2]="Audi";
cars[3]="Volvo";
//another way to define array
var students = ["Ali", "Mostafa" , "Kero" , "Ahmed"];
document.write(students.length+"<br>");
document.write(students[4]+"<br>"); // Array out of bounds :))) undefined
var frontend = ["HTML","CSS","JS","JQ","BS"];
var backend = ["PHP","SQL","LARAVEL"];
var fullstack = frontend.concat(backend);
document.write(fullstack.length+"<br>");
document.write(fullstack[1]+"<br>");
