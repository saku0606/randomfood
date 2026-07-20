const food = document.getElementById("food");
const button = document.getElementById("button");

const fooditem = ["お好みやき","たこ焼き","あめちゃん"];

button.addEventListener("click", () => {
    let item = Math.floor(Math.random() * fooditem.length)
    food.textContent = fooditem[item];
});

