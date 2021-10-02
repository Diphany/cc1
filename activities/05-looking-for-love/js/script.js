/**
Looking for Love
Diphany Chea

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circle1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
};

let state = 'simulation'; // Can be: title, simulation, love, sadness

/**
Description of preload
*/
function preload() {

}

function setup() {
  createCanvas(500, 500);
  setupCircles();
}

function setupCircles() {
  // Position circles separated from one another
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

  // Start circle moving in a random direction
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
  background(0);

  if (state === 'title') {
    title();
  }

  else if (state === 'simulation') {
    simulation();
  }

  else if (state === 'love') {
    love();
  }

  else if (state ==='sadness') {
    sadness();
  }
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function move() {
  // Move the circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function checkOffscreen() {
  // Check if the circles have gone offscreen
  if (circle.x < 0 || circle1.x > width || circle.y < 0 || circle1.y > height || circle2.x > width || circle2.y < 0 || circle2.y > height) {
    // SAD ENDING
  }
}

function checkOverlap() {
  // Check if the circles overlap
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    // LOVE ENDING!
  }
}

function display() {
  // Display the circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}
