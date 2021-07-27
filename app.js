const canvas = document.querySelector("#jsCanvas");

let painting = false;
function onMouseMove(event) {
    const x = event.offsetX
    const y = event.offsetY
}

function stopPainting(){
    painting = false;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

function onMouseLeave(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave", stopPainting)
}