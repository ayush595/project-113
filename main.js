function preload() {
    
}
function setup() {
    canvas= createCanvas(1000,1000);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    
}
function draw() {
    image(video, 50, 50, 400, 400);
    circle(30,30,55);
    rect(55,20,339,10);
    circle(421,30,55);
    rect(20,55,10,339);
    circle(30,421,55);
    rect(55,421,380,10);
    circle(421,421,55);
    rect(421,55,10,340)
}

function take_pic() {
    save("pro.png");
}