const SIZE=800;

function main(){
    drawHouse();
    drawBackground();
    drawPlants();
}


let canvas = document.getElementById("myCanvas")
let ctx=canvas.getContext("2d");

canvas.width=SIZE;
canvas.height=SIZE;


function drawHouse() {
    //color of the roof
    ctx.fillStyle="#181411";
    ctx.strokeStyle="black";
    ctx.lineWidth="3";
    ctx.save();

    // Draw a triangle for the roof
    ctx.beginPath();
    ctx.moveTo(100,260);
    ctx.lineTo(300,10);
    ctx.lineTo(500,260);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //color of the house
    ctx.fillStyle="#E75E0B";
    ctx.strokeStyle="black";
    ctx.lineWidth="3";
    ctx.save();

    // house walls
    ctx.fillRect(100, 260, 400, 300);
    ctx.strokeRect(100, 260, 400, 300);

    // windows
    ctx.fillStyle="yellow";
    ctx.fillRect(130, 300, 70, 45);
    ctx.fillRect(205, 300, 70, 45);
    ctx.fillRect(325, 300, 70, 45);
    ctx.fillRect(400, 300, 70, 45);
    ctx.fillRect(130, 350, 70, 45);
    ctx.fillRect(205, 350, 70, 45);
    ctx.fillRect(325, 350, 70, 45);
    ctx.fillRect(400, 350, 70, 45);
  

    // door lines
    ctx.beginPath();
    ctx.restore();
    //left side of door
    ctx.moveTo(230, 440);
    ctx.lineTo(230, 560);
    //right side of door
    ctx.moveTo(370, 440);
    ctx.lineTo(370, 560);
    //middle side of door
    ctx.moveTo(300, 426);
    ctx.lineTo(300, 560);
    ctx.stroke();

    //arc of door
    ctx.beginPath();
    ctx.arc(300,580,155,1.355*Math.PI,1.65*Math.PI); // door arc
    ctx.stroke();

    // door handles
    ctx.beginPath();
    ctx.arc(290,510,5,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(310,510,5,0,2*Math.PI);
    ctx.stroke();

    //draw sun
    ctx.beginPath();
    ctx.arc(650, 90, 70, 0, 2 * Math.PI);
    ctx.fillStyle="yellow";
    ctx.fill();


    //draw tree
    ctx.beginPath();
    ctx.moveTo(550, 500);
    ctx.lineTo(600, 300);
    ctx.lineTo(650, 500);
    ctx.fillStyle="#0EE639";
    ctx.fill();
    //trunk
    ctx.fillStyle="#895120";
    ctx.fillRect(580, 480, 35, 90);
    

    
    //Draw the fence using a for loop
    for (let i=0; i < SIZE; i+=50){
        ctx.fillRect(i,580,45,220)
    }
}


function drawBackground(){
    //hides the background behind house
    ctx.globalCompositeOperation = "destination-over"
	ctx.beginPath();
	ctx.fillStyle="lightblue";
	ctx.rect(0,0,SIZE,SIZE*0.5);
	ctx.fill();
	
    ctx.globalCompositeOperation = "destination-over"
	ctx.beginPath();
	ctx.fillStyle="green";
	ctx.rect(0,SIZE*0.5,SIZE,SIZE*0.5);
	ctx.fill();
    
}


