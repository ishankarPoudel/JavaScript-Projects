const final = () => {
    const shankar = new Date();
    const result = shankar.toLocaleTimeString();
    const time = document.querySelector(".time");
    time.textContent = result;
}
setInterval(final, 1000);