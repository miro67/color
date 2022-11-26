const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const text = document.getElementById("colorname");
function chynch() {
    const colorn = document.body.style.backgroundColor = colors[Math.floor(Math.random()*4)]
    const dan = colorn.slice(length)
    text.innerHTML = dan;
}