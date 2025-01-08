function addLanguage(langName){
    const li = document.createElement("li");
    li.innerHTML = `${langName}`;
    document.querySelector(".language").appendChild(li);
}
addLanguage("Python");
addLanguage("Typescript");

//Optimising way to add languages
function addOptLang(langName){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName));
    document.querySelector(".language").appendChild(li);
}
addOptLang("C++");
addOptLang("R");


//Edit

//Here we change the 2 lang "Python" to "Java"
const secondLang = document.querySelector("li:nth-child(2)");

// ways to add text
// secondLang.innerHTML = "Java";
// secondLang.textContent = "Java";

const newLi = document.createElement("li");
newLi.textContent = "Java";
newLi.style.color = "red";
secondLang.replaceWith(newLi);


//Now here we change the "Javascript" to "Typescript"
const firstLang = document.querySelector("li:first-child");

const replLi = document.createElement("li");
replLi.textContent = "Typescript";
replLi.style.color = "yellow";
firstLang.replaceWith(replLi);


//Remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();