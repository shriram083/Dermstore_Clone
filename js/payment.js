document.querySelector("#submit-order").addEventListener("click", completedPayment);

function completedPayment(){
    window.location.href = "./success.html";
}