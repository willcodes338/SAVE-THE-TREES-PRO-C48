var bg, bgImg;
var boy, boyImg, man1, man2, man3, manImg;
var tree1, tree1Img,tree2,tree2Img, tree3, tree3Img;
var form,system,code,security;
var score = 0;

function preload(){
 bgImg = loadImage("house.jpg");
 manImg = loadImage("construction worker.png");
 boyImg = loadImage("man.png");
 tree1Img = loadImage("tree.png");
 tree2Img = loadImage("tree2.png");
 tree3Img = loadImage("tree3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  //bg = createSprite(displayWidth/2, displayHeight/2);
  //bg.addImage(bgImg);
  //bg.scale = 2;
  //bg.depth = 3;
  man1 = createSprite(displayWidth/3, displayHeight/2+200, 20, 50);
  man1.addImage(manImg);
  man2 = createSprite(displayWidth/2+460, displayHeight/2+200, 20, 50);
  man2.addImage(manImg);
  man3 = createSprite(displayWidth/2+150, displayHeight/2+300, 20, 50);
  man3.addImage(manImg);
  boy = createSprite(displayWidth/2-180, displayHeight/2+300, 20, 50);
  boy.addImage(boyImg);
  boy.scale = 0.35;
  tree1 = createSprite(displayWidth/3-100,displayHeight/2+50,20,70);
  tree1.addImage(tree1Img);
  tree1.scale = 0.6
  tree2 = createSprite(displayWidth/2+340, displayHeight/2.2+200,20,70);
  tree2.addImage(tree2Img);
  tree2.scale = 0.5;
  tree3 = createSprite(displayWidth/2+80, displayHeight/2+110,20,70);
  tree3.addImage(tree3Img);
  tree3.scale = 0.55;
  system = new System();
  security = new Security();
  
}

function draw() {
  background(bgImg);  
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    fill("black")
    textSize(100);
    text("YOU SAVED THE TREES",250, 200);
    man1.visible = false;
    man2.visible = false;
    man3.visible = false;
  }
  drawSprites();
}