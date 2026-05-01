function callNow(){
window.location.href="tel:8982767251";
}

function whatsapp(){
window.open("https://wa.me/918982767251");
}

function direction(){
window.open("https://maps.google.com/?q=Maihar");
}

function sendWhatsApp(){
let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let address=document.getElementById("address").value;

if(!name || !phone){
alert("Fill Name & Phone");
return;
}

let msg=`Name: ${name}%0APhone: ${phone}%0AAddress: ${address}`;
window.open(`https://wa.me/918982767251?text=${msg}`);
}

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => {
  slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
  slider.style.animationPlayState = "running";
});
