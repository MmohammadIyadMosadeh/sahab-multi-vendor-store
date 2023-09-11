var per = document.getElementById("per")
var Plus = document.getElementById("Plus")
var Miuns = document.getElementById("Miuns")
var reset = document.getElementById("reset")


let value = 0;
let fontsize = 16;

Plus.addEventListener("click" , function(){
    value++;
    per.textContent = value;
    
    
})
Miuns.addEventListener("click" , function(){
    value--;
    per.textContent = value;
    
})
reset.addEventListener("click" , function(){
    value = 0;
    per.textContent = value;
    
})


