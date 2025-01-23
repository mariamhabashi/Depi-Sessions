/*Changing style*/
var elm1 = document.getElementById("demo1")
elm1.style.width="100px";
elm1.style.backgroundColor="blue";
elm1.style.color="white";

/*Creating Elements */
//Creating a new paragragh
var p =document.createElement("p");
//Creating a text node
var txt = document.createTextNode("Some New Content...");
//Adding text to paragragh
p.appendChild(txt);
p.style.color="Darkblue";
//Selecting div
var elem2 = document.getElementById("demo2");
//Adding paragragh
elem2.appendChild(p);

/*Removing Elements */
var parent = document.getElementById("demo3");
var child = document.getElementById("p1");
parent.removeChild(child);

/*Replacing Elements*/
var p1 = document.createElement("p");
var txt2 = document.createTextNode("New Paragragh from JS!");
p1.appendChild(txt2);
var parent1 = document.getElementById("demo4");
var child1 = document.getElementById("p4");
parent1.replaceChild(p1,child1); //New Element , Old Element

/*Animations*/
//box 
var box = document.getElementById("box");
//position
var pos = 0;
//time-frame
var t = setInterval(movediag,20);
//function
function movediag(){
    if (pos>=150){
        clearInterval(t);
    }
    else{
         pos +=1;
         box.style.left=pos + 'px';
         box.style.top=pos +'px';
         
    }
}

var box2 = document.getElementById("box2");
//position
var pos2 = 0;
//time-frame
var t2 = setInterval(moveback,20);
//function
function moveback(){
    if (pos2>=150){
        clearInterval(t2);
    }
    else{
         pos2 +=1;
         box2.style.left=pos2 + 'px';
         var pos12=pos2;
         while(pos12!=0){
            pos12 -=1;
            box2.style.left=pos2 + 'px';
            box2.style.top=pos2 + 'px';

         }
         
    }
}

var boxi = document.getElementById("box");
var posi = 0;
var directioni = 1; // 1 for right, -1 for left
var ti = setInterval(moverightleft, 20);
function moverightleft() {
    if (posi >= 150 || posi <= 0) {
         directioni *= -1; // reverse direction
    }
    posi += directioni;
    boxi.style.left = posi + 'px';
}

/*Tasks*/
//1.box moves fromleft to right , then from right to left
//2.box moves left right up and down
//3.box moves like a snake

/*Events*/
//When a user take action(event) --> JS excutes code
function show(){
    alert("Welcome!")
}
var btn=document.getElementById("btn");
btn.onclick=function(){
    var dateDiv = document.getElementById("dateDiv");
    dateDiv.innerHTML = Date();
}

function change(){
    var x= document.getElementById("name");
    x.value = x.value.toUpperCase();
}

function lampchange(){
    var lamp =document.getElementById("lamp");
    if(lamp.src.match("images/pic_bulbon.gif")){
        lamp.src="images/pic_bulboff.gif";
    }
    else{
        lamp.src="images/pic_bulbon.gif";
    }
}
function TurnON(){
    var lamp =document.getElementById("lamp");
    lamp.src="images/pic_bulbon.gif";
}
function TurnOFF(){
    var lamp =document.getElementById("lamp");
    lamp.src="images/pic_bulboff.gif";
}
