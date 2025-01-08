const createElement = document.createElement("div");
console.log(createElement);

createElement.className = "main";
createElement.id = Math.round(Math.random() * 10 + 1);
createElement.setAttribute("name", "myDivElement");
createElement.style.backgroundColor = "green";
createElement.style.padding = "12px"

// 2 ways to add text
createElement.innerText = "hello ";
const addText = document.createTextNode("lorem blah blah blah............");
createElement.appendChild(addText);

document.body.appendChild(createElement);