const submit = document.querySelector(".btn");
const popup = document.querySelector(".popup")
const ok = document.querySelector("#okButton");

submit.addEventListener('click',()=>{
    popup.style.top = "50%";
    popup.style.visibility = "visible";
    popup.style.transform = "translate(-50%,-50%) scale(1.0)";
})

ok.addEventListener('click',()=>{
    popup.style.top = "0";
    popup.style.visibility = "hidden";
    popup.style.transform = "translate(-50%,-50%) scale(0.1)";
})