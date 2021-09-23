/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/

// rectangle
let rectangle = {
  x: 200,
  y: 300,
  size: 200,
  fill: 0,
}

let rectangle2 = {
  x: 1100,
  y: 300,
  size: 200,
  fill: 0,
}

// ellipse
let ellip = {
  x: 750,
  y: 800,
  size: 260,
  fill: 0,
  speed: 1
}

let ellip2 = {
  x: 0,
  y: 50,
  size: 100,
  fill: 0,
  speed: 10
}

// triangle
let tri = {
  x1: 800,
  y1: 400,
  x2: 700,
  y2: 400,
  x3: 750,
  y3: 500,
  size: 300,
  fill: 157,
}

function setup() {
createCanvas(1500, 1000);
background(242, 139, 90);
noStroke();
}


/**
Description of draw()
*/
function draw() {

  // First window
  rectangle.fill = map(mouseX, 0, 1500, 0, 200);
  fill(rectangle.fill);
  rect(rectangle.x, rectangle.y, rectangle.size);

  // Second window
  rectangle2.fill = map(mouseX, 0, 1500, 0, 200);
  fill(rectangle2.fill);
  rect(rectangle2.x, rectangle2.y, rectangle2.size);

  // Door
  ellip.y = ellip.y + ellip.speed*4;
  fill(ellip.fill);
  ellipse(ellip.x, ellip.y, ellip.size);
  ellip.size = ellip.size + ellip.speed;

  // Roof?
  ellip2.x = constrain(ellip2.x, 0, 1500);
  ellip2.x = map(mouseX, width, 0, 1500, 0);
  fill(ellip2.fill);
  ellipse(ellip2.x, ellip2.y, ellip2.size);

  // Nose
  tri.fill = map(mouseY, 0, 1500, 0, 150);
  fill(tri.fill);
  triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3, tri.size);

}
