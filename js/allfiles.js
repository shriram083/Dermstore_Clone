
import{apical} from "./fetch.js";
// async function apical(url) {
//     let res=await fetch(url)
//     let data=await res.json()
//     return data;
// }
    let  products= await apical("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
console.log(products.length,"pro")

  var length=products.length;
  var len=document.createElement("div")
  len.innerText=length;
        localStorage.setItem("products", JSON.stringify(products))
    
    function showProducts(d) {
        console.log(d.length,"d")
        let products = d;
    
        products.forEach(function (el) {
            appendProduct(el);
        })
    }
    
    var arr=JSON.parse(localStorage.getItem("clickedProduct"))||[]
    function appendProduct(el) {
        let catalogue = document.getElementById('products-right');
    
        let div = document.createElement("div")
        div.setAttribute("class","cont")
        // console.log(el);
    
        
    
    /////////////////
   

    // div.innerHTML = `<a class="each-product" <div>
    //             <img
    //               src= ${el.image_link}
    //               alt=""
    //             />
               
    //             <div class="name">${el.name}</div>
               
    //               <span class="discount">${el.price}</span>
              
    //           </div>
    //           <button id="black" >QUICK BUY</button>
    //           </a
    //         >`
    // console.log(div)

// /////////


var a=document.createElement("a")
a.setAttribute("class","each-product")
var div45=document.createElement("div")
var img=document.createElement("img")
img.src=el.image_link
var divheart=document.createElement("div")
divheart.innerHTML="♡"
divheart.addEventListener("click",function(){
    divheart.innerText=null;
    divheart.innerText="♥"
})
divheart.setAttribute("class","heart")
div45.append(divheart,img)
var div1=document.createElement("div")
div1.setAttribute("class","name")
div1.innerText=el.name
var span1= document.createElement("span");
span1.textContent="$"+el.price;
span1.setAttribute("class","discount")
var div3=document.createElement("div")
div3.setAttribute("id","star")
var rating=el.rating;

if(rating==5)
{
    div3.innerText="★★★★★"

}
if(rating==4.5)
{
    div3.innerText="★★★★☆"

}
if(rating==4)
{
    div3.innerText="★★★★☆"
}
if(rating==3||3.5)
{
    div3.innerText="★★★☆☆"
}
if(rating==2||2.5)
{
    div3.innerText="★★☆☆☆"
}
if(rating==1||1.5)
{
    div3.innerText="★☆☆☆☆"
}
if(rating==null)
{
    div3.innerText="★★★☆☆"
}
console.log(rating,"rating")
var btn=document.createElement("button")
btn.setAttribute("id","black")
    btn.addEventListener("click", function () {
    arr.push(el)
        localStorage.setItem("clickedProduct", JSON.stringify(arr))
    })
    btn.innerText="Quick Buy"
    a.append(div45,div1,span1,div3,btn)
    div.append(a)
    catalogue.append(div)
}

///////////////////    
     
    
    showProducts(JSON.parse(localStorage.getItem("products")))
    
    
    
    function sort() {
        let menu = document.getElementById("type");
        menu.addEventListener("change", generateData);
    
        function generateData(event) {
            if (menu.value == '1') {
                let products = JSON.parse(localStorage.getItem("products"))
                let catalogue = document.getElementById('products-right');
                catalogue.innerHTML = null;
    
                products = products.sort(function (a, b) {
                    return b.price - a.price
                });
    
                showProducts(products);
            } else if (menu.value == '2') {
                let products = JSON.parse(localStorage.getItem("products"))
                let catalogue = document.getElementById('products-right');
                catalogue.innerHTML = null;
    
                products = products.sort(function (a, b) {
                    return a.price - b.price
                });
    
                showProducts(products);
            } else if (menu.value == '3') {
                let products = JSON.parse(localStorage.getItem("products"))
                let catalogue = document.getElementById('products-right');
                catalogue.innerHTML = null;
    
                products = products.sort(function (a, b) {
                    return b.discount - a.discount
                });
    
                showProducts(products);
            }

            else if (menu.value == '4') {
                let products = JSON.parse(localStorage.getItem("products"))
                let catalogue = document.getElementById('products-right');
                catalogue.innerHTML = null;
                products = products.sort(function (a, b) {
                    return a.rating - b.rating
                });
                showProducts(products);
            }
        }
    }
    sort();
    
    function filter(x) {
        let products = JSON.parse(localStorage.getItem("products"))
    
        products = products.filter(function (el) {
            return el.product_type == x;
        })
    
        let catalogue = document.getElementById('products-right');
        catalogue.innerHTML = null;
        showProducts(products);
    }
    
    function priceFilter(x, y) {
        let products = JSON.parse(localStorage.getItem("products"))
    
        products = products.filter(function (el) {
            return el.price < x && el.price > y;
        })
    
        let catalogue = document.getElementById('products-right');
        catalogue.innerHTML = null;
        showProducts(products);
    }
 var checkbox=document.getElementById("adidas")
 checkbox.addEventListener('change', e => {

    if(e.target.checked){
     
      filter("foundation")
    }

});

var checkbox2=document.getElementById("puma")
checkbox2.addEventListener('change', e => {
  
   if(e.target.checked){
       console.log("hello")
     filter("bronzer")
     
   }

});
var checkbox3=document.getElementById("HRX")
checkbox3.addEventListener('change', e => {

   if(e.target.checked){
   
     filter("blush")
   }

});
var checkbox4=document.getElementById("wrogn")
checkbox4.addEventListener('change', e => {

   if(e.target.checked){
     filter("eyeshadow")
   }

});
var checkbox5=document.getElementById("500")
checkbox5.addEventListener('change', e => {

   if(e.target.checked){
    priceFilter(10,0)
   }

});

var checkbox6=document.getElementById("1000")
checkbox6.addEventListener('change', e => {

   if(e.target.checked){
    priceFilter(20,10)
   }

});

var checkbox7=document.getElementById("1500")
checkbox7.addEventListener('change', e => {

   if(e.target.checked){

    priceFilter(25,15)
   }

});
