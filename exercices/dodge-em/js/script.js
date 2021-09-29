/**
Activity #4 - Dodging COVID-19
Diphany Chea

Sea scene where you control a small bubble and you must not let the bigger
bubble engulf you!
*/

"use strict";

// Big bubble
let enemyBubble = {
  x: 0,
  y: 250,
  size: 100,
  sizeScale: 20,
  maxScale: 400,
  vx: 0,
  vy: 0,
  speed: 40,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

// Small bubble
let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 5,
  maxSpeed: 20
};

// Bubble in the background
let numStatic = 10;

// Fishes in the background
let blueFish, orangeFish = {
  x: 0,
  y: 0,
  speed: 5
};


/**
Preloading images of fish for aesthetic purposes :>
*/
function preload() {
  blueFish = loadImage('assets/images/blueFish.png');
  orangeFish = loadImage('assets/images/orangeFish.png');
}


/**
Enemy spawn
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  enemyBubble.y = random(0, height);
  enemyBubble.vx = enemyBubble.speed;
}


/**
Create the dynamic and static elements in the scene
*/
function draw() {
  background(20, 50, 99);
  imageMode(CENTER);

  // Display bubbles in the background
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(58, 139, 201);
    strokeWeight(20);
    point(x, y);
  }

  // Bad bubble movement
  enemyBubble.x = enemyBubble.x + enemyBubble.vx;
  enemyBubble.y = enemyBubble.y + enemyBubble.vy;

  if (enemyBubble.x > width) {
    enemyBubble.x = 0;
    enemyBubble.y = random(0, height);
  }

  // User movement + acceleration effect when moving
  if (mouseX < user.x) {
    user.ax = -user.acceleration;
  }
  else {
    user.ax = user.acceleration;
  }

  if (mouseY < user.y) {
    user.ay = -user.acceleration;
  }
  else {
    user.ay = user.acceleration;
  }

  user.vx = user.vx + user.ax;
  user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
  user.vy = user.vy + user.ay;
  user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  // Check for catching enemyBubble
  let d = dist(user.x, user.y, enemyBubble.x, enemyBubble.y);
  if (d < enemyBubble.size/2 + user.size/2) {
    noLoop();
  }
  // print(d);

  /*
    Increase enemyBubble size if it's getting close to the user and decrease if
    it's getting further away from the user
  */
  if (d < enemyBubble.x/5 + user.x/5) {
      enemyBubble.size = enemyBubble.size + enemyBubble.sizeScale;
      enemyBubble.size = constrain(enemyBubble.size, 100, enemyBubble.maxScale);
  }
  else {
    enemyBubble.size = enemyBubble.size - enemyBubble.sizeScale;
    enemyBubble.size = constrain(enemyBubble.size, 100, enemyBubble.maxScale);
  }

  // Fish movement
  // blueFish.x = blueFish.x + blueFish.speed;
  // orangeFish.x = orangeFish.x + orangeFish.speed;

  /*
    Bunch of fishes in the background for decorations
    I don't know how to make images move so :<
  */
  image(blueFish, 300, 300, 300, 200);
  image(blueFish, 600, 800, 300, 200);
  image(blueFish, 1000, 100, 150, 100);
  image(blueFish, 1600, 500, 100, 75);
  image(orangeFish, 300, 700, 100, 75);
  image(orangeFish, 800, 400, 150, 100);
  image(orangeFish, 1400, 800, 300, 200);
  image(orangeFish, 1800, 200, 300, 200);

  // Display enemy bubble
  fill(enemyBubble.fill.r, enemyBubble.fill.g, enemyBubble.b);
  ellipse(enemyBubble.x, enemyBubble.y, enemyBubble.size);

  // Display user
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
}
