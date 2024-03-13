// Build a counter that increments when a button is click
/* <button id=" button">Button</button>
    <p id="para">Hello world</p> */
let counter = 0;
const button = document.getElementById('button');
const para = document.getElementById('para');
const shankar = () => {
    button.addEventListener("click", () => {
        counter++;
        para.innerHTML = `button clicked ${counter} times`;
    })

}
shankar();