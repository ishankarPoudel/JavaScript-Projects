console.log("initalizaing");
const button = document.getElementById("button");
const mainArea = document.querySelector(".main");


// checking if there is any saved theme in local storage
let savedTheme = localStorage.getItem("theme");
let currentTheme = savedTheme || "purple";
if (savedTheme) {
    mainArea.classList.add(savedTheme);

};

currentTheme = "purple";
button.addEventListener("click", () => {
    if (currentTheme === "purple") {
        mainArea.classList.remove("purple");
        currentTheme = "dark";
        mainArea.classList.add("dark");
    } else if (currentTheme === "dark") {
        mainArea.classList.remove("dark");
        mainArea.classList.add("purple");
        currentTheme = "purple";
    }

    // saving theme in localStorage
    localStorage.setItem("theme", currentTheme);



});