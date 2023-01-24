let body = document.querySelector('body');
let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let circle4 = document.querySelector('.circle4');
let circle5 = document.querySelector('.circle5');
body.addEventListener('mousemove',(e) => {

    
    circle1.style.display = "block";
    circle1.style.left = e.pageX -10 + "px";
    circle1.style.top =  e.pageY -10 +"px";

    circle2.style.display = "block";
    circle2.style.left = e.pageX -9 + "px";
    circle2.style.top =  e.pageY -9 +"px";

    circle3.style.display = "block";
    circle3.style.left = e.pageX -8 + "px";
    circle3.style.top =  e.pageY -8 +"px";

    circle4.style.display = "block";
    circle4.style.left = e.pageX -7 + "px";
    circle4.style.top =  e.pageY -7 +"px";

    circle5.style.display = "block";
    circle5.style.left = e.pageX -6 + "px";
    circle5.style.top =  e.pageY -6 +"px";5
    
})