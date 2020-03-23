"use strict"
const appEl = document.querySelector(".app");
let arrSpurr = ["hvaða sport stundar þessi?", "en þessi?","en hann?","og svo þessi?"];
let arrMyndir = ["br.jpg","hon.jpg","hawk.jpg","haldo.jpg"];
let arrSvör = [["MTB","sund","fótbolta"],["körfubolta","klifur","sprett hlaup"],["handbolta","hjólabretti"],["sund","snjóbretti","fótbolta"]];
let arrRsvör= ["MTB","klifur","hjólabretti","snjóbretti"];
let arrElements = [];



class spurning{
    constructor(spur, mynd, svor, Rsvar){
        this.spur = spur;
        this.mynd = mynd;
        this.svor = svor;
        this.Rsvar = Rsvar
    }
    spurSmidur(){
        appEl.innerHTML += `<h1 id="spur">${this.spur}</h1>`;
        appEl.innerHTML += `<img id="mynd" src="${this.mynd}" alt="mynd">`;
        for (let i = 0; i < this.svor.length; i++) {
            appEl.innerHTML += `<div class = "svar" id=svar${i}><p>${this.svor[i]}</p>`;
       }       
    }
}




function build(){
    for (let i = 0; i < arrSpurr.length; i++) {
        let el = new spurning(arrSpurr[i],arrMyndir[i],arrSvör[i],arrRsvör[i])
        arrElements.push(el)
        
    }
    
}

function le(spur, svar,svarid){
    if (spur == svar) {
        console.log("rétt");
        return true
     }
     else{
        console.log("vitlaust");
        let villa = document.querySelector(`#svar${svarid}`);
        console.log(villa);
        villa.style = "color: red;";
        return false;
     }
}

function appps(num){
    let index = num;
    let listiSvor = [];
    let quest = arrElements[index];
    
    quest.spurSmidur();
    let bla = document.getElementsByClassName("svar");
    for (let i = 0; i < bla.length; i++) {  
        listiSvor.push(bla[i].addEventListener("click",function(){if (le(arrRsvör[index],bla[i].textContent,i) == true) {
            index ++;
            if (index < arrElements.length) {
                appEl.innerHTML= "";
                appps(index);
            }
            else{
                document.body.innerHTML = "<h1> Takk fyrir að spila </h1>";
            }
        }},false));
    }
}




build();
appps(0);
