// Create a button that changes the background color of the page when clicked.
//GENERATES DYNAMIC BACKGROUND COLOR.

const button = document.getElementById('button');
button.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${colors()}, ${colors()}, ${colors()})`;
});
//Genrating random numbers between 0 and 255 to generate random colors

const colors = () => {
    let rang = Math.floor(Math.random() * 256);
    return rang;
};