
let panda_pixelated = [
    [6,7,8,9,14,15],
    [6,7,8,9,13,14,15],
    [2,6,15],
    [1,5],
    [0,4,5],
    [0,4,8,9],
    [0,4,7,8,9,12,13],
    [0,4,7,8,12,13],
    [0,1,4,5,13],
    [0,1,4,5,6,9,10,11],
    [1,2,4,5,6,7,10,14,15],
    [1,2,3,4,5,6,7,8,12,13,14,15],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    [2,3,4,6,7,8,9,13,14,15],
    [3,4,6,7,8,9,12,13,14,15],
    [7,8,9,10,12,13,14]
]
for(let i =0; i < 16;i++){
    panda_pixelated[i]=panda_pixelated[i].map((num)=>num+16*i);
}

let SQUARES_DIM = 16;
function createGrid(funky = false){
    let container = document.querySelector(".container");
    let rand1=Math.floor(Math.random()*255);
    let rand2=Math.floor(Math.random()*255);
    let rand3=Math.floor(Math.random()*255);
    for(let i =0; i <SQUARES_DIM**2;i++){
        console.log(container.clientWidth);
        let div = document.createElement("div");
        let color = funky? `rgb(${(rand1+i)%256},${(rand2+i)%256},${(rand3+i)%256})`:"black";
        div.style.cssText=`background-color:${color};width:${(container.clientWidth)/(SQUARES_DIM)-0.1}px;height:${(container.clientWidth)/(SQUARES_DIM)}px;`;
        div.classList.add("box");
        div.id = `box${i}`;
        container.appendChild(div);
    }
    container.addEventListener('mouseover',(event)=>{
        let box = document.getElementById(event.target.id);
        box.classList.toggle("cursor");
        
    });
    container.addEventListener('mouseout',(event)=>{
        let box = document.getElementById(event.target.id);
        box.classList.toggle("cursor");
        box.style.opacity = `${parseFloat(window.getComputedStyle(box).opacity)+0.1}`;
    });
}
createGrid()
function drawPanda(){
    let panda = panda_pixelated.flat();
    panda.forEach((pixel)=>{
        let box =document.querySelector(`#box${pixel}`);
        box.classList.add("cursor");
    })
}
drawPanda();
function popup(){
    let container = document.querySelector(".container");
    container.remove();
    let new_container = document.createElement("div");
    new_container.classList.add("container");
    let body = document.querySelector("body");
    body.insertBefore(new_container,body.firstChild);

    let pixel_size=window.prompt("Enter the Pixel Size");
    while(pixel_size>100){
        pixel_size=window.prompt("Enter a lower Pixel Size");
    }
    SQUARES_DIM = pixel_size;
    createGrid();    
    if(SQUARES_DIM==16) drawPanda();

}

function getFunky(){
    let container = document.querySelector(".container");
    container.remove();
    let new_container = document.createElement("div");
    new_container.classList.add("container");
    let body = document.querySelector("body");
    body.insertBefore(new_container,body.firstChild);
    createGrid(true);
    if(SQUARES_DIM==16) drawPanda();
}
function eraseCanvas(){
    let container = document.querySelectorAll(".box");
    container.forEach((box)=>{
        box.classList.remove("cursor");
        box.style.opacity = 0;
    });

}
