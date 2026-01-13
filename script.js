const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Oscar Piastri loves Lando Norris");
});
const count = document.getElementById('count');
const increase = document.getElementById('increase');
const decrease = document.getElementById("decrease");
let temp = 0

increase.addEventListener("click", () => {
    temp++;
    count.textContent=temp;
});
decrease.addEventListener("click", () => {
    temp--;
    count.textContent=temp;
});