var sky, grant, ground, hill, hill2;

var stage = new createjs.StageGL("canvas");
stage.setClearColor("#000");

// grab canvas width and height for later calculations:
var w = stage.canvas.width,
    h = stage.canvas.height;

var manifest = [
  {src: "spritesheet_grant.png", id: "grant"},
  {src: "sky.png", id: "sky"},
  {src: "ground.png", id: "ground"},
  {src: "hill1.png", id: "hill"},
  {src: "hill2.png", id: "hill2"}
],
    loader = new createjs.LoadQueue(false, null, true);
loader.addEventListener("complete", handleComplete);
loader.loadManifest(manifest, true, "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1524180/");

function handleComplete() {
  sky = new createjs.Bitmap(loader.getResult("sky"));

  var groundImg = loader.getResult("ground");
  ground = new createjs.Shape();
  ground.graphics
    .beginBitmapFill(groundImg)
    .drawRect(0, 0, w + groundImg.width, groundImg.height);
  ground.set({
    tileW: groundImg.width,
    tileH: groundImg.height,
    rectCmd: ground.graphics.command
  });
  ground.cache(0, 0, w + groundImg.width, groundImg.height);   // Must cache to use in StageGL

  hill = new createjs.Bitmap(loader.getResult("hill"));
  hill.setTransform(Math.random() * w, 0, 4, 4);
  hill.alpha = 0.5;

  hill2 = new createjs.Bitmap(loader.getResult("hill2"));
  hill2.setTransform(Math.random() * w, 0, 3, 3);

  var spriteSheet = new createjs.SpriteSheet({
    framerate: 30,
    "images": [loader.getResult("grant")],
    "frames": {"regX": 82, "height": 292, "count": 64, "regY": 0, "width": 165},
    // define two animations, run (loops, 1.5x speed) and jump (returns to run):
    "animations": {
      "run": [0, 25, "run", 1.5],
      "jump": [26, 63, "run"]
    }
  });
  grant = new createjs.Sprite(spriteSheet, "run");

  stage.addChild(sky, hill, hill2, ground, grant);
  stage.on("stagemousedown", handleJumpStart);

  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick", tick);
  handleResize();
}

function handleJumpStart() {
  grant.gotoAndPlay("jump");
}

function tick(event) {
  var deltaS = event.delta / 1000;
  var position = grant.x + 150 * deltaS;

  // Move Grant
  var grantW = grant.getBounds().width * grant.scaleX;
  grant.x = (position >= w + grantW) ? -grantW : position;
  
  // Move the ground under Grant
  ground.x = (ground.x - deltaS * 150) % ground.tileW;
  
  // Move the hills.
  hill.x = (hill.x - deltaS * 30);
  if (hill.x + hill.image.width * hill.scaleX <= 0) {
    hill.x = w;
  }
  hill2.x = (hill2.x - deltaS * 45);
  if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
    hill2.x = w;
  }

  stage.update(event);
}

// Resize and move everything
window.addEventListener("resize", handleResize, false);
function handleResize(event) {
  w = window.innerWidth; 
  h = window.innerHeight;
  stage.canvas.width = w; stage.canvas.height = h;
  stage.updateViewport(w, h);
  
  sky.scaleX = w/sky.image.width;
  sky.scaleY = h/sky.image.height;
  
  ground.y = h-ground.tileH;
  ground.rectCmd.w = w + ground.tileW;
  ground.cache(0, 0, w + ground.tileW, ground.tileH);
  
  hill.y = h - hill.image.height * 4 - ground.tileH;
  hill2.y = h - hill2.image.height * 3 - ground.tileH;
  
  grant.y = h - ground.tileH - grant.getBounds().height;
  
  stage.update();
}

createLockup(["EaselJS"]);
