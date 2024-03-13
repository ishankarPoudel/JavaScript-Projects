console.log("initalizaing");
let images = [
    "images/carouse1.png",
    "images/carouse2.jpg",
    "images/carouse3.jpg",
    "images/carouse4.jpg",
];

//event listener for next button
let counter = 1;
const operations = () => {
    const next = document.getElementById("nextBtn");
    next.addEventListener("click", () => {
        document.getElementById("picture").src = images[counter];
        if (counter < (images.length - 1)) {
            counter++;
        } else {
            counter = 0;
        }
    });
}


operations();
//event listner for previous button
const operationsII = () => {
    const previous = document.getElementById("preBtn");
    previous.addEventListener("click", () => {
        document.getElementById("picture").src = images[counter];
        if (counter < (images.length - 1)) {
            counter++;
        } else {
            counter = 0;
        }

    });

}
operationsII();