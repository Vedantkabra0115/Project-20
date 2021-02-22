
var cat,mouse,bg,catImg,mouseImg,bgImg
function preload() {
    //load the images here
    catImg = loadAnimation("cat1.png");
    mouseImg = loadAnimation("mouse2.png");
    catImg2 = loadAnimation("cat2.png");
    bgImg = loadAnimation("garden.png");
    mouseImg2 = loadAnimation("mouse4.png");
    mouseImg3 = loadAnimation("mouse3.png");
    catImg3 = loadAnimation("cat4.png");

}

function setup(){
    createCanvas(1000,800)
    //create tom and jerry sprites here

    cat = createSprite(700,400,20,20);
    cat.addAnimation("cat",catImg);

    mouse = createSprite(300,400,20,20);
    mouse.addAnimation("mouse",mouseImg);

    bg = createSprite(500,400,100,800);
    bg.addAnimation("bg",bgImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    collide();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("right"))
  {
      mouse.velocityX = 5;
      if(mouse.x>600)
      {
        mouse.changeAnimation("mouseRunning",mouseImg2);
      }
  }
if(keyDown("left"))
{
    cat.velocityX = -5;
    cat.changeAnimation("catRunning",catImg2)
}

}

function collide()
{
    if(mouse.collide(cat) || cat.collide(mouse))
    {
        mouse.velocityX = 0;
        cat.velocityX = 0;
        mouse.changeAnimation("rest",mouseImg3);
        cat.changeAnimation("restc",catImg3);
    }
}
