const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const chach = document.getElementById("btn");
const namecolor = document.getElementById("color")
var fool;
chach.addEventListener("click",function(){
    let mm ="#";
    for(let i=0;i<6;i++){
        mm += hex[Math.floor(Math.random()*hex.length)]
    }
    fool = document.body.style.backgroundColor= mm.slice(length)
    console.log(namecolor.innerHTML = fool)
});