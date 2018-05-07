// for red, green, and blue color values 
var r, g, b;
function setup() {
  // Pick colors randomly
    createCanvas(500,500);
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
  // put drawing code here
    background("#FFB6C1");
    stroke(r, g, b);
    fill(r, g, b, 127);
    ellipse(360,200,200);
    textSize(20);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(screenLeft);
    text("Honey",85,25,15);
}
// When the user clicks the mouse
function mousePressed() {
    // Check if mouse is inside the circle
    var d = dist(mouseX, mouseY, 360, 200);
    if (d < 100) {
        // Pick new random color values
        r = random(255);
        g = random(255);
        b = random(255);
    }
}