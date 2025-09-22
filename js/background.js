
const COLOR_WHEEL = [
    "#ffcc00",   // yellow - matches --color-primary
    "#cc0000", // red - matches --color-secondary  
    "#0000cc",    // blue - matches --color-accent
    "#339966",   // green - matches --color-neutral
];

let backgroundCanvas;
let rectangles = [];

function setup() {
    backgroundCanvas = createCanvas(windowWidth, windowHeight);
    backgroundCanvas.parent('background-container');
    backgroundCanvas.style('position', 'fixed');
    backgroundCanvas.style('top', '0');
    backgroundCanvas.style('left', '0');
    backgroundCanvas.style('z-index', '-1');
    
    angleMode(DEGREES);
}

function draw() {}

function drawBackground() {
    createRectangles();
    drawRectangles();
}

function createRectangles() {
    rectangles = [];
    
    for (let i = 0; i < 10; i++) {
        fill(random(COLOR_WHEEL));
        strokeWeight(0);
        
        const x = (random() * 1.2 + 0.) * width;
        const y = (random() * 1.2 - 0.8) * height;
        const recWidth = width * (0.1 + 0.4 * random());
        const recHeight = height * (0.1 + 0.6 * random());

        rectangles.push({ x, y, recWidth, recHeight, color: random(COLOR_WHEEL) });
    }
}

function drawRectangles() {
    background("#ffffff");
    strokeWeight(0);
    const rot = 30;
    rotate(rot);
    
    for (r in rectangles) {
        const { x, y, recWidth, recHeight, color } = rectangles[r];
        fill(color);        
        rect(x, y, recWidth, recHeight);
    }
    
    rotate(-rot);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawRectangles();
}
