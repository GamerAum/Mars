canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = "mars.jpg"
rover_image = "rover.png"

function add(){
    mars_imgTag = new Image();
    mars_imgTag.src = background_image;
    mars_imgTag.onload = uploadBackground;

    rover_imgTag = new Image();
    rover_imgTag.src = rover_image;
    rover_imgTag.onload = uploadRover;
}

function uploadBackground(){
    ctx.drawImage(mars_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == 38){
        up();
        console.log("up key pressed");
    }

    if(keypressed == 40){
        down();
        console.log("down key pressed")
    }

    if(keypressed == 37){
        left();
        console.log("left key pressed")
    }

    if(keypressed == 39){
        right();
        console.log("right key pressed")
    }
}

function up(){
    if(rover_y>=0){
    rover_y = rover_y - 10
    console.log("When up arrow is pressed , x ="+rover_x+", y ="+rover_y);
    uploadBackground();
    uploadRover();
    }
}

function down(){
    if(rover_y<=600-100){
        rover_y = rover_y +10
        console.log("when down key pressed, x ="+rover_y+",y ="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x = rover_x -10
        console.log("when left key pressed, x ="+rover_x+",y ="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<=800-100){
        rover_x = rover_x +10
        console.log("when right keyvpressed, x ="+rover_x+",y ="+rover_y);
        uploadBackground();
        uploadRover();         
    }
}