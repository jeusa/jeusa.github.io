// Import shared theme colors
// Note: Since we're not using ES6 modules in HTML, we'll keep the colors here
// but they now match exactly with the CSS theme colors

// Color configuration - matches the DaisyUI theme exactly
const THEME_COLORS = {
    primary: "#ffcc00",   // yellow - matches --color-primary
    secondary: "#cc0000", // red - matches --color-secondary  
    accent: "#0000cc",    // blue - matches --color-accent
    neutral: "#339966",   // green - matches --color-neutral
    background: "#ffffff" // white background
};

// Color wheel for rectangles (semantic theme colors)
const COLOR_WHEEL = [
    THEME_COLORS.primary,   // primary color (yellow)
    THEME_COLORS.secondary, // secondary color (red)
    THEME_COLORS.accent,    // accent color (blue)
    THEME_COLORS.neutral    // neutral color (green)
];

let backgroundCanvas;

function setup() {
    // Create canvas that fills the entire window
    backgroundCanvas = createCanvas(windowWidth, windowHeight);
    backgroundCanvas.parent('background-container');
    backgroundCanvas.style('position', 'fixed');
    backgroundCanvas.style('top', '0');
    backgroundCanvas.style('left', '0');
    backgroundCanvas.style('z-index', '-1');
    
    angleMode(DEGREES);
    drawBackground();
}

function draw() {
    // Static background, no animation in draw loop
}

function drawBackground() {
    // Set background color to white (matches theme base)
    background(THEME_COLORS.background);
    
    // Apply rotation for artistic effect
    const rot = 30;
    rotate(rot);
    
    // Draw random rectangles
    for (let i = 0; i < 10; i++) {
        fill(random(COLOR_WHEEL));
        strokeWeight(0);
        
        // Random position and size
        const x = (random() * 1.2 + 0.) * width;
        const y = (random() * 1.2 - 0.8) * height;
        const recWidth = width * (0.1 + 0.4 * random());
        const recHeight = height * (0.1 + 0.6 * random());
        
        rect(x, y, recWidth, recHeight);
    }
    
    rotate(-rot);
}

function windowResized() {
    // Resize canvas when window is resized
    resizeCanvas(windowWidth, windowHeight);
    drawBackground();
}

// Function to regenerate background (can be called from outside)
function regenerateBackground() {
    drawBackground();
}
