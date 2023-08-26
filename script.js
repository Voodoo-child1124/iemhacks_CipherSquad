let text = document.getElementById("text");
let fg= document.getElementById("fg");
let water = document.getElementById("water");
let sky = document.getElementById("sky");
window.addEventListener('scroll',() =>
{
    let value = window.scrollY;


    text.style.marginTop= value*2.5+'px';
    fg.style.top = value*-1.5+'px';
    fg.style.left = value*-1.5+'px';
    sky.style.left = value*1.5+'px';
    water.style.right = value*-1.5+'px';


}
);
