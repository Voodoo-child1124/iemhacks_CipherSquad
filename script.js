let text = document.getElementById("text");
// let fg= document.getElementById("fg");
let water = document.getElementById("water");
let sky = document.getElementById("sky");
window.addEventListener('scroll',() =>
{
    let value = window.scrollY;


    text.style.marginTop= value*1.5+'px';
    // fg.style.top = value*-1.5+'px';
    // fg.style.left = value*-1.5+'px';
    sky.style.left = value*1.5+'px';
    water.style.left = value*1.5+'px';


}
);