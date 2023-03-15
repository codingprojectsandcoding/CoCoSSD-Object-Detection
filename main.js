img = "";
status1 = "";
function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status - Detecting Objects";
}
function preload() {
img = loadImage("dog_cat.jpg");
}
function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Dog", 35, 70);
noFill();
stroke("#FF0000");
rect(30, 50, 350, 400);
fill("#FF0000");
text("Cat", 340, 100);
noFill();
stroke("#FF0000");
rect(300, 90, 300, 300);
}
function modelLoaded() {
console.log(" Cocossd Is Initialized");
status1 = true;
objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
if (error) {
console.error(error);
}
else {
console.log(results);
}
}