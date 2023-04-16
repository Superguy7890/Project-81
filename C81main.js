canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(100,100,30,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_md);
function my_md(e){
    mx=e.clientX-canvas.offsetLeft;
    my=e.clientY-canvas.offsetTop;
circ(mx,my)
}
 function circ(mx,my){
    ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(mx,my,30,0,2*Math.PI);
ctx.stroke();
 }