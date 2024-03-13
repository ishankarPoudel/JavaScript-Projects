/* <div class="buttonArea">
        <button id=" bt1">Button 1</button>
        <button id=" bt2">Button 2</button>
        <button id=" bt3">Button 3</button>
    </div> */


const buttonArea = document.querySelector(".buttonArea");
buttonArea.addEventListener("click", (event) => {
    // console.log(event.target.id);
    if (event.target.id == "bt1" || event.target.id == "bt2" || event.target.id == "bt3") {
        alert("same event is appear for all the buttons");
    }
});