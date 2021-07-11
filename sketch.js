var background , backgroundImage;
var tom , tomImg;
var jerry , jerryImg; 

function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png");
    tomImg = loadAnimation("images/cat1.png");
    jerryImg = loadAnimation("images/mouse1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse4.png");
    jerryTeasing = loadImage("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom   
    tom = createSprite(700,700,50,50);
    tom.addImage("tom",tomImg);

    //create jerry 
    jerry = createSprite(100,700,50,50);
    jerry.addImage("jerry",jerryImg);
}

function draw() {
    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keycode === left_arrow){
    jerry.addAnimation("jerryTeasing",jerryImg2);
    jerry.changeAnimation("jerryTeasing");
    jerry.frameDelay = 25;
}

}
