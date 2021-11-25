var mouseEvent = "";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "color";
var radius = "Radius";
var width = "width_of_the_line";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListerner("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mousey = e.clienty - canvas.offsetTop;
    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,2* Math.PI);
        ctx.stroke();
    }
