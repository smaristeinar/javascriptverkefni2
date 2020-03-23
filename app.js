/*
2. live note list gefur þér kleift á því að breyta html elementum án þess að þurfa refresha eitt eða neitt á meða static getur ekki gert það.
3. 

*/

"use strict";


let par1EL = document.querySelector("p");
console.log(par1EL);

par1EL.style = "color: red;";

let par2EL = document.querySelectorAll("p");

for (let i = 0; i < par2EL.length; i++) {
   par2EL[i].textContent = "paragraph";
}

let titel = document.createElement("h1");
titel.appendChild(document.createTextNode("verkefni2.2"));
document.querySelector("body").prepend(titel);

let nafnEl = document.createElement("p");
nafnEl.appendChild(document.createTextNode("smari"));
document.querySelector("body").append(nafnEl);


