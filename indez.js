const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("recuerda que tu eres la mejor y siempre podras con todo ERES LA MEJOR <3")
}) ;

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener ("mouseover",function () {
    const randomX = parseInt(Math.ramdom()*100);
    const randomY = parseInt(Math.ramdom()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)` );
}) 
     
