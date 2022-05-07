// importing navbar
import { navbar } from "../component/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

// importing footer
import { footer } from "../component/footer.js";

document.querySelector("#footer").innerHTML = footer();

// account dropDown
var container = document.querySelector(".container");

var account = document.querySelector(".account");
account.addEventListener("click", accountFn);

function accountFn() {
  container.classList.toggle("container-height");
}
