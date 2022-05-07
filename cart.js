
var pto=0;
 
     
    var addtocart = JSON.parse(localStorage.getItem("clickedProduct"));
    window.addEventListener("load", function () {
      displayData(addtocart);
    });

    function displayData(addtocart) {
       
      addtocart.map(function (el,index) {
        pto=pto+Number(el.price)
        
        // console.log(pto)
        var row = document.createElement("tr");
var cross=document.createElement("td");
cross.setAttribute("class","buttonremove")

var bcros=document.createElement("button");
bcros.innerText="x";
bcros.addEventListener("click",function(){
  removefunc(el,index)
})
  
cross.append(bcros)
        var td1 = document.createElement("td");
        td1.setAttribute("class","td11")
        var imgo=document.createElement("img")
   imgo.src=el.image_link
   imgo.setAttribute("class","imgo")
   td1.append(imgo)

        var td2 = document.createElement("td");
        td2.setAttribute("class","td22")
        td2.innerText = el.name;

        var td3 = document.createElement("td");
        td3.innerText = "$"+el.price;
        td3.setAttribute("class","product-price ")

      

        row.append(td1, td2, td3,cross);

        document.querySelector("tbody").append(row);
      });
      var jisub1=document.querySelector(".jisub");
    jisub1.textContent=Math.floor(pto);
   
    var jitotal=document.querySelector(".jitotal")
    jitotal.textContent=Math.floor(pto);
    console.log(jisub1,jitotal)
var inpute=document.createElement("input");
inpute.setAttribute("class", "inj")
inpute.placeholder="Got a coupon code? Enter it here:";
// inpute.setAttribute("class", "inpute")

var buttone= document.createElement("button");
buttone.innerText="ADD";

buttone.setAttribute("class","buttone")

buttone.addEventListener("click",function(){
    if(inpute.value=="discount10")
    {
        var disc=pto-(pto*(10/100))
jitotal.innerText=Math.floor(disc);
jisub1.innerText=Math.floor(disc);
    }
    else
    {alert("Coupon code invalid!")}
})
  
   
    

var dive=document.createElement("div");
dive.setAttribute("class", "inpute")
dive.append(inpute,buttone)

document.querySelector(".ole").append(dive)
document.querySelector(".trbut").addEventListener("click", function(){
    window.location.href="checkout.html"

})
    }
 


    function removefunc(elem,index) {
 
   
addtocart.splice(index,1)

      localStorage.setItem("clickedProduct", JSON.stringify(addtocart));
      
      window.location.reload();

      }
    

