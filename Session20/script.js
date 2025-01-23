/*Event Listener*/
var element = document.getElementById("element");
element.addEventListener("click",welcome);
element.addEventListener("mouseover",welcome);
function welcome(){
    alert("Hello!")
}
element.removeEventListener("mouseover",welcome);

var btn = document.getElementById("random");
btn.addEventListener("click" , random);
function random(){
    alert(Math.random());
    btn.removeEventListener("click",random)
}

/*Image Slider*/
var images = ['images/img_1.jpg','images/img_2.jpg','images/img_3.jpg'];
var num = 0;
var slider=document.getElementById("slider");
function next(){
    num++;
   if(num >= images.length){
    num=0;
   }
   slider.src=images[num];
}
function prev(){
    num--;
   if(num <= 0){
    num=0;
   }
   slider.src=images[num];
}

/*Form Validation*/
function validate(){
    var n1=document.getElementById("num1");
    var n2=document.getElementById("num2");
    if(n1.value !='' && n2.value !=''){
        if(n1.value == n2.value){
            return true;
        }
    }
    alert("The values should be equal and not empty!");
    return false;
}
