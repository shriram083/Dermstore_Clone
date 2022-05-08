// importing navbar
import { navbar } from "../component/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

// importing footer
import { footer } from "../component/footer.js";

document.querySelector("#footer").innerHTML = footer();

// account dropDown
var container = document.querySelector(".contain");

var account = document.querySelector(".account");
account.addEventListener("click", accountFn);

function accountFn() {
  // console.log('s')
  container.classList.toggle("contain-height");
}

// brand drop down
var brandCon = document.querySelector(".brandCon");
var brand = document.querySelector(".brands");
brand.addEventListener("click", function () {
  brandCon.classList.toggle("brandCon-height");
});

// browser drop down
var browserCon = document.querySelector(".browserCon");
var browser = document.querySelector(".browser");
browser.addEventListener("click", function () {
  browserCon.classList.toggle("browserCon-height");
});

// makeup drop down
var makeupCon = document.querySelector(".makeupCon");
var makeup = document.querySelector(".makeup");
makeup.addEventListener("click", function () {
  makeupCon.classList.toggle("makeupCon-height");
});

// going to login page
document.querySelector(".login").addEventListener("click", function () {
  window.location = "./login.html";
});

// going to register page
document.querySelector(".register").addEventListener("click", function () {
  window.location = "./signup.html";
});

// going to cart page
document.querySelector("#cart").addEventListener("click", function () {
  window.location = "./cart.html";
});
