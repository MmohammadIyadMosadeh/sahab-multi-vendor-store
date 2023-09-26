// var per = document.getElementById("per")
// var Plus = document.getElementById("Plus")
// var Miuns = document.getElementById("Miuns")
// var reset = document.getElementById("reset")


// let value = 0;
// let fontsize = 16;

// Plus.addEventListener("click" , function(){
//     value++;
//     per.innerHTML= value;
//     fontsize = fontsize + 1;
//     per.style.fontSize = fontsize +"px";
    
// })
// Miuns.addEventListener("click" , function(){
//     value--;
//     per.innerHTML = value;
//     fontsize = fontsize - 1;
//     per.style.fontSize = fontsize +"px";
    
// })
// reset.addEventListener("click" , function(){
//     value = 0;
//     per.innerHTML = value;
//     per.style.fontSize  = 16 +"px";
    
// })

$(function(){
    var value = 0;
    var fountsize = 16;

    $("#plus").click(function(){
        value++;
        fountsize++;
        $("p").text(value);
        $('p').css('font-size', fountsize + 'px');

    })  
    $("#Miuns").click(function(){
        value--;
        fountsize--;
        $("p").text(value);
        $('p').css('font-size', fountsize + 'px');

    })  
    $("#reset").click(function(){
        value= 0;
        fountsize = 16;
        $("p").text(value);
        $('p').css('font-size', fountsize + 'px');

    })  


});
