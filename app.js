let btn1 =document.querySelector(".btn1");
let btn2 =document.querySelector(".btn2");
let btn3 =document.querySelector(".btn3");
let img=document.querySelector(".img");


btn2.addEventListener("click",()=>{
    
btn1.classList.remove("active");
btn3.classList.remove("active");
btn2.classList.add("active");
img.src="images/images2.png";

})
btn3.addEventListener("click",()=>{
    
btn1.classList.remove("active");
btn2.classList.remove("active");
btn3.classList.add("active");
img.src="images/x.jpg";

})
btn1.addEventListener("click",()=>{
    
btn2.classList.remove("active");
btn3.classList.remove("active");
btn1.classList.add("active");
img.src="images/images1.jpg";

})
