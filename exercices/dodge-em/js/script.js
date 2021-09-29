/**
Activity #4 - Dodging COVID-19
Diphany Chea

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let covid19 = {
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

let numStatic = 1000;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0, height);
  covid19.vx = covid19.speed;

  // noCursor();
}


/**
Description of draw()
*/
function draw() {
  background(0);

  // Display static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

  // Covid 19 movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
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

  // Check for catching covid19
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < covid19.size/2 + user.size/2) {
    noLoop();
  }
  print(d);

  /*
    Increase covid19 size if it's getting close to the user and decrease if
    it's getting further away from the user
  */

  if (d < covid19.x/5 + user.x/5) {
      covid19.size = covid19.size + covid19.sizeScale;
      covid19.size = constrain(covid19.size, 100, covid19.maxScale);
  }
  else {
    covid19.size = covid19.size - covid19.sizeScale;
    covid19.size = constrain(covid19.size, 100, covid19.maxScale);
  }

  // Display covid 19
  fill(covid19.fill.r, covid19.fill.g, covid19.b);
  ellipse(covid19.x, covid19.y, covid19.size);

  // Display user
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
}
