canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array=["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;;
background_image=nasa_mars_images_array[random_number];
console.log("background_image="+background_image);
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_image;

    background_imgTag=new Image();
    background_imgTag.onload = uploadRover;
    background_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,0,0,rover_width,rover_height);
}