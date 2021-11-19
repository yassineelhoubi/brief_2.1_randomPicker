let cyrcle = document.querySelector(".cyrcle");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 2000);

btn.onclick = function () {
    console.log( number)
    cyrcle.style.transform = "rotate(" + number + "deg)";
    number = Math.ceil(Math.random() * 2000);
    
}