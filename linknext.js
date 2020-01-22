var str = "Click here or die!";
document.write("<p>" + str.link("uhoh.jpg") + "</p>");

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeStyle = "white";
var x = 0, y = 0;

//simple keyboard input
function getkey() {
	    document.onkeydown = function(event) {
        switch (event.keyCode) {
           case 37:
                x-=1;
              break;
           case 38:
                y-=1;
              break;
           case 39:
                x+=1;
              break;
           case 40:
                y+=1;
              break;
        }
    };
    
}

//drawing function
function draw(){
	context.moveTo(0,0);
	context.lineTo(x,y);
	context.stroke();
	
	//x = x + 1;
	//y = y + 1;
	
	getkey();
	
	//update canvas recursively
	window.requestAnimationFrame(draw);
}

draw();
