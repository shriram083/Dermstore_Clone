let data = JSON.parse(localStorage.getItem('clickedProduct')) || [];
let data1 = JSON.parse(localStorage.getItem('small_img')) || [];
console.log(data1)
console.log(data);
data1.map(function(elem){
let img1=document.createElement("img")
img1.src = elem.image_link;

let img2=document.createElement("img")
img2.src = elem.image_link;

let img3=document.createElement("img")
img3.src = elem.image_link;

let img4=document.createElement("img")
img4.src = elem.image_link;

let img5=document.createElement("img")
img5.src = elem.image_link;
 document.querySelector("#small_img").append(img1,img2,img3,img4,img5)

})


data.map(function(elem){

document.querySelector("#appended_heading").innerHTML = null;
document.querySelector("#appended_price").innerHTML = null;
document.querySelector("#img").innerHTML = null;
document.querySelector("#appended_description").innerHTML = null;
// let div = document.createElement("div")
let img = document.createElement("img")
img.src = elem.image_link;


let name= document.createElement("h2");
name.innerText= elem.name;

let description= document.createElement("p");
description.innerText= elem.description;


let price= document.createElement("h2");
price.innerText= `$`+elem.price;




document.querySelector("#img").append(img)
// document.querySelector("#small_img").append(img)
document.querySelector("#appended_heading").append(name)
document.querySelector("#appended_price").append(price)
document.querySelector("#appended_description").append(description)


// div.append(img,brand);


})

let count =1;

if(localStorage.getItem("CounterNum") ==null){
    count = 1

}else{
    count =localStorage.getItem("CounterNum")
    document.querySelector("#num").innerText = count;
}


let incfun = ()=> {
   
   count++;
   localStorage.setItem("CounterNum",count)
   document.querySelector("#num").innerText = count;
   console.log(count)
}

document.querySelector("#inc").addEventListener("click",incfun)

let decFun = ()=> {
    count--;
    localStorage.setItem("CounterNum",count)
    document.querySelector("#num").innerText = count;
    console.log(count)
 }
 
 document.querySelector("#dec").addEventListener("click",decFun)

                




 let cartBtn = ()=>{

    window.location.href = "./cart.html"
 }

 document.querySelector("#cartbutton").addEventListener("click",cartBtn)