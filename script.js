let container = document.querySelector(".container");
let SQUARES_DIM = 32;
for(let i =0; i <SQUARES_DIM**2;i++){
    console.log(container.clientWidth);
    let div = document.createElement("div");
    div.style.cssText=`width:${(container.clientWidth)/(SQUARES_DIM)-0.1}px;height:${(container.clientWidth)/(SQUARES_DIM)-0.1}px;`;
    div.classList.add("box");
    div.id = `box${i}`;
    container.appendChild(div);
}
let boxes = document.querySelectorAll(".box");
container.addEventListener('mouseover',(event)=>{
    let box = document.getElementById(event.target.id);
    box.style.backgroundColor="black";
});
container.addEventListener('mouseout',(event)=>{
    let box = document.getElementById(event.target.id);
    box.style.backgroundColor="gray";
});