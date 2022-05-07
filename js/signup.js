

document.querySelector("#form").addEventListener("submit", signUpFun);

var userData = JSON.parse(localStorage.getItem("userCreds"))||[]
function signUpFun() {
  event.preventDefault();

  var userObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    // userName: document.querySelector("#user").value,
  };
  window.location.href="login.html"
  console.log(userObj);
  userData.push(userObj);
  //console.log(userData)
  localStorage.setItem("userCreds",JSON.stringify(userData))

  
}