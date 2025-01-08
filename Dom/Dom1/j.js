const parVal = document.querySelector(".parent");
console.log(parVal);
console.log(parVal.children);
console.log(parVal.children[2].innerHTML);

for(let i = 0; i < parVal.children.length; i++){
    console.log(parVal.children[i].innerHTML);
}


parVal.children[1].style.color = "orange";
console.log(parVal.firstElementChild.innerHTML = "Sunday");


const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling.innerHTML);


console.log("Nodes: ",parVal.childNodes);
