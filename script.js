let text1 = document.getElementById("text");
let text = document.getElementById("text");
window.addEventListener('scroll',() =>
{
    let value = window.scrollY;
    text1.style.marginTop= value*-2.5+'px';
    text.style.marginTop= value*2.5+'px';
    }
);