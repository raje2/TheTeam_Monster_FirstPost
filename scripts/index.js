import {getResult,append, getResult2, append3} from "./fetch.js"
const api = "482833f031d9405d804df9bf1de6ccb2";


// categories 1 start here ...
let categories = document.getElementById("categories1").children;
function cSearch(){
    let container = document.getElementById("container3");
    container.innerHTML=null;
    getResult(this.id, api).then((data)=>{
     append(data.articles, container, this.id);
 })

}
for(let el of categories){
    el.addEventListener("click", cSearch);
}

// categories2 start here



let categories2 = document.getElementById("categories2").children;

function cSearch2(){
    let container = document.getElementById("container3");
    container.innerHTML=null;
    getResult2(this.id, api).then((data)=>{
     append3(data.articles, container, this.id);
 })

}
for(let el of categories2){
    el.addEventListener("click", cSearch2);
}




// Auto suggest news start here

import {getValue,append2} from "./fetch.js"

function myAuto(){
    const api = "482833f031d9405d804df9bf1de6ccb2";
    let container = document.getElementById("container3");
     //container.innerHTML=null;
    getValue(api).then((data)=>{
     append2(data.articles, container);
    // console.log(data);
 })

}

myAuto();


// right side news heading

import { getValue2, append4 } from "./fetch.js";


function myAuto2(){
    const api = "482833f031d9405d804df9bf1de6ccb2";
    let container = document.getElementById("news_bar");
    container.innerHTML=null;
    getValue2(api).then((data)=>{
     append4(data.articles, container);
    // console.log(data);
 })

}


myAuto2();



import {navbar,advertisment} from "./footer.js"

document.getElementById("likes").innerHTML=advertisment();

const api_key = "482833f031d9405d804df9bf1de6ccb2";

import { slidedata } from "./fetch.js";

let dat = await slidedata(api_key);
console.log(dat);

let heds = document.getElementById("head")

let slides=document.getElementById("slide")
     let i=0;
     
     
     
     setInterval(function(){
      
      if(i===dat.length){
         i=0
      }
      slides.innerHTML=null
      heds.innerHTML=null
      let A=document.createElement("a")
      A.target="-blank"
      A.href=dat[i].url
    //   console.log(dat[i].url)
   
      let pic=document.createElement("img")
       A.append(pic)
      pic.src=dat[i].urlToImage
      pic.id="pic_slide"
     
      let h2=document.createElement("h3")
      h2.innerText=dat[i].title
   
    //   let p=document.createElement("p")
    //     p.innerText=dat[i].description
      heds.append(h2)
       
      slides.append(A)
      
      i++
   
   },5000)
   

//    sidebar function start here...
import {sideSearch, appendSide} from "./fetch.js"

let categories3 = document.getElementById("list-bar").children;
function csearchPro(){
    let container = document.getElementById("container3");
    container.innerHTML=null;
    sideSearch(this.id, api).then((data)=>{
        appendSide(data.articles, container, this.id);
 })

}
for(let el of categories3){
    el.addEventListener("click", csearchPro);
}



// search bar function start here...

import {getSearch, appendSearch} from "./fetch.js"
let search_api = "482833f031d9405d804df9bf1de6ccb2";
let searchNews = (e)=>{

    if(e.key == "Enter"){
        let container = document.getElementById("container3");
     container.innerHTML=null;
        let searchData = document.getElementById("search-bar").value;
        getSearch(searchData,search_api).then((data)=>{
            // console.log(data);
            appendSearch(data.articles, container, searchData )
        })
        // console.log(searchData);
    }
}


document.getElementById("search-bar").addEventListener("keydown", searchNews);