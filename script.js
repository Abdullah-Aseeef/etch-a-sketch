let SQUARES_DIM = 16;
function createGrid(){
    let container = document.querySelector(".container");
    for(let i =0; i <SQUARES_DIM**2;i++){
        console.log(container.clientWidth);
        let div = document.createElement("div");
        div.style.cssText=`width:${(container.clientWidth)/(SQUARES_DIM)-0.1}px;height:${(container.clientWidth)/(SQUARES_DIM)}px;`;
        div.classList.add("box");
        div.id = `box${i}`;
        container.appendChild(div);
    }
    container.addEventListener('mouseover',(event)=>{
        let box = document.getElementById(event.target.id);
        box.style.backgroundColor="black";
    });
    container.addEventListener('mouseout',(event)=>{
        let box = document.getElementById(event.target.id);
        box.style.opacity = `${parseFloat(window.getComputedStyle(box).opacity)+0.1}`;
    });
}
createGrid()
function popup(){
    let container = document.querySelector(".container");
    container.remove();
    let new_container = document.createElement("div");
    new_container.classList.add("container");
    let body = document.querySelector("body");
    body.insertBefore(new_container,body.firstChild);

    let pixel_size=window.prompt("Enter the Pixel Size");
    SQUARES_DIM = pixel_size;
    createGrid();
    

    // createGrid();
}