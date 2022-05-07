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
  console.log('s')
  browserCon.classList.toggle("browserCon-height");
});
