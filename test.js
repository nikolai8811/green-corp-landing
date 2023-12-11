let sel = document.querySelector("#square");
let p=100;
function  buttonClick(){
  p=p*9/10
sel.style.width= p+"px";
sel.style.height=p+"px"
}

sel.addEventListener("click", buttonClick);
console.log(sel.getAttribute("style"));