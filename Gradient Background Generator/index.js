// Select buttons
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

// Add event listeners to buttons
button1.addEventListener("click", setBackgroundGradient);
button2.addEventListener("click", setBackgroundGradient);

// Function to generate random hex color
function generateRandomColor() {
    let color = "#";
    const hexValues = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to set background gradient
function setBackgroundGradient() {
    const colors = generateRandomColor();
    this.innerText = colors; // Update button text
    document.body.style.backgroundImage = `linear-gradient(to right top, ${colors}, ${colors}, ${colors}, ${colors}, ${colors}, ${colors})`;
}