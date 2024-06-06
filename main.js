var textH2=document.querySelector("div h2");
var textP=document.querySelector("div p");
var largeText=document.querySelector(".large");
var smallText=document.querySelector(".small");
function changeTextSizeBig()
{
    textH2.classList.add("fontSizeBig");
    textP.classList.add("fontSizeBig");
}
function changeTextSizeSmall()
{
     textH2.classList.remove("fontSizeBig");
    textP.classList.remove("fontSizeBig");
}

largeText.onclick=changeTextSizeBig;
smallText.onclick=changeTextSizeSmall;
