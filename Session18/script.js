/*Core Objects*/
//Math Object
document.write(Math.PI +"<br>");
document.write(Math.pow(2,3) +"<br>");
document.write(Math.sqrt(9) +"<br>");
document.write(Math.round(1.5) +"<br>");
document.write(Math.random() +"<br>");
document.write(Math.max(100,200,300) +"<br>");
document.write(Math.min(100,200,300) +"<br>");

/*Task 1:create a program that will ask the user 
to input a number and alert its sqrt*/

//var num = prompt("Enter a number");
//alert("The square root of the number you have written = "+Math.sqrt(num));


//Date Object
/*function myAlert(){
    alert("Hiii");
}
setInterval(myAlert,5000); //5000 ms = 5 s*/

var d = new Date();
document.write(d.getFullYear()+"<br>"); // year
document.write(d.getMonth()+"<br>"); // months 0-11
document.write(d.getDate()+"<br>"); // month-day
document.write(d.getDay()+"<br>"); // day 0-6
document.write(d+"<br>");

/*Task 2: create a program that prints the current time
once every second */
/*function printTime(){
    var t =new Date();
    var hours = t.getHours();
    var mins = t.getMinutes();
    var secs = t.getSeconds();
    document.write(hours + " : "+mins+ " : "+secs+"<br>");

}*/
//setInterval(printTime,1000)

/*DOM (Document Objct Model)*/
//Selecting Elements 
//By ID
var elem = document.getElementById("demo");
elem.innerHTML = "Hello world";
//By TagName
var arr1 = document.getElementsByTagName("h5");
for (x=0;x<arr1.length;x++){
    arr1[x].innerHTML="Welcome!"
}
//By Class
var arr2 = document.getElementsByClassName("intro");
arr2[1].innerHTML="This is paragraph 2";

var elem2 = document.getElementById("list");
var arr3 = elem2.childNodes;
for(x=0;x<arr3.length;x++){
    arr3[x].innerHTML="Drinks";
}

//Changing Attributes
var elem3 = document.getElementById("myImg");
elem3.src="img-1.png";

var arr4 = document.getElementsByTagName("a");
arr4[0].href = "https://www.bing.com";

//Changing style


//Creating Elements


//Replacing Elements


//Removing Elements