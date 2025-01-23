/*Conditionals*/
//If statement
var myNum=7 , myNum2=10;
if(myNum<myNum2){
    document.write("Product X's units < Product Y's units ");
}
document.write("<br>")

//else statement
var myScore=30;
if(myScore>=50){
    document.write("Pass");
}
else{
    document.write("Fail")
}
document.write("<br>")

//elseif statement
var course=3;
if(course==1){
    document.write("HTML");
}
else if(course==2){
    document.write("CSS");
}
else{
    document.write("JS")
}
document.write("<br>")

//task : test eligability
//if age >=18 , then allowed
//if else , then isn't allowed
document.write("Task1","<br>");
var age=21;
if(age>=18){
    document.write("You're allowed to take this test")
}
else{
    document.write("You're not allowed to take this test")
}
document.write("<br>")

//task2 : test state 
//if state = 1 --> Print Message --> Online
//if state = 2 --> Print Message --> Away
//else state = 1 --> Print Message --> Offline
document.write("Task2","<br>");
var state=2;
if(state==1){
    document.write("Online");
}
else if (state==2){
    document.write("Away");
}
else{
    document.write("Offline");
}

//Switch
var day=4;
switch(day){
    case 1:
        document.write("Sunday");
        break;
    case 2:
        document.write("Monday");
        break;
    case 3:
        document.write("Tuesday");
        break;
    case 4:
        document.write("Wednesday");
        break;
    case 5:
        document.write("Thursday");
        break;
    case 6:
        document.write("Friday");
        break;
    default:
        document.write("Saturday")
}
document.write("<br>")

//String
var color1="blue";
switch(color1){
    case "red":
        document.write("#ff0000");
        break;
    case "green":
        document.write("#00ff00");
        break;
    case "blue":
        document.write("#0000ff");
        break;
    default:
        document.write("#000");
}
document.write("<br>");

//Task3 : switch(quantity)
//case 1 unit --> Offer : 1 unit free
//case 2 units --> Offer : 4 unit free
//case 3 units --> Offer : 9 unit free
//out of stock 
document.write("Task3","<br>");
var unit=3;
switch (unit){
    case 1:
        document.write("1 unit free");
        break;
    case 2:
        document.write("4 units free");
        break;
    case 3:
        document.write("9 unit free");
        break;
    default:
        document.write("Out of stock!")
}
document.write("<br>");

//Task4: switch (colorMode)
//red,green,blue --> RGB
//cyan,magenta,yellow,black --> CMYK
//color not found!
document.write("Task4","<br>");
var color="blue";
switch (color){
    case "red": 
    case "green":
    case "blue":
        document.write("RGB");
        break;
    case "cyan":
    case "magenta":
    case "yellow":
    case "black":
        document.write("CMYK");
        break;
    default:
        document.write("color not found!")
}
document.write("<br>");

/*Loops*/
//for loop
document.write("For loop" , "<br>");
for(i=1;i<5;i++){
    document.write(i+"<br>");
}
document.write("Another style" + "<br>");
var i=1;
for( ; i<=5;i++){
    document.write(i+"<br>");
}
document.write("Another style" + "<br>");
var i=1;
for( ; i<=5; ){
    document.write(i+"<br>");
    i++;
}

//Task 5: print even numbers from 0 t0 20
document.write("Task 5" , "<br>");
document.write("Even Numbers:","<br>");
for (i=0;i<=20;i++){
   if(i%2==0){
    document.write(i,"<br>");
   }
}
//Task 6: print odd numbers from 0 t0 20
document.write("Task 6" , "<br>");
document.write("Odd Numbers:","<br>")
for (i=0;i<=20;i++){
   if(i%2!=0){
    document.write(i,"<br>");
   }
}
//Task 7: print sum of numbers from 1 to 10
document.write("Task 7" , "<br>");
var sum=0;
for (i=0;i<=10;i++){
    sum+=i;
}
document.write("The sum of numbers from 1 to 10 = "+sum,"<br>")

//While loop
document.write("While loop" , "<br>");
var i=1;
while(i<=10){
    document.write(i ,"<br>")
    i++;
}

//do while loop
document.write("do while loop" , "<br>");
var i=1;
do{
    document.write(i,"<br>");
    i++;
}while(i<=10);

//break --> jump out of a loop
document.write("break statement","<br>");
for(i=1;i<=10;i++){
    if (i==6){
        break;
    }
    document.write((i),"<br>");
}

//continue --> breaks only one iteration
document.write("continue statement","<br>");
for(i=1;i<=10;i++){
    if (i==6){
        continue;
    }
    document.write((i),"<br>");
}

//Task 8 : print the sum of numbers from 21 to 25 except 23 --> sum=92
document.write("Task 8","<br>");
var sum=0;
for(i=21;i<=25;i++){
    if (i==23){
        continue;
    }
    sum+=i;
}
document.write("sum of numbers from 21 to 25 except 23 = ",sum,"<br>");