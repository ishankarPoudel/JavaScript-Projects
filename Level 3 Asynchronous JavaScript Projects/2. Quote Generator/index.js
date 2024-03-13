const button = document.getElementById("btn");
const quotationone = document.querySelector(".quotationone");
const authorName = document.querySelector(".authorname");
const url = "https://type.fit/api/quotes";
let currentQuote = 0;
//fetching API
generateQuotes();
async function generateQuotes() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response failed!!!", `${response.statusText}`);
        }
        let pureData = await response.json();

        if (currentQuote < pureData.length) {
            quotationone.innerHTML = ` <span>"</span>${pureData[currentQuote].text}<span>"</span>`;
            authorName.innerHTML = `<span>--${pureData[currentQuote].author.split(",")[0]}</span>`;
            currentQuote++;
        } else {
            currentQuote = 0;
            quotationone.innerHTML = ` <span>"</span>${pureData[currentQuote].text}<span>"</span>`;
            authorName.innerHTML = `<span>--${pureData[currentQuote].author.split(",")[0]}</span>`;
            currentQuote++;

        }
    } catch (error) {
        console.error("error fetching data", error);

    }

}
button.addEventListener("click", () => {
    generateQuotes();
});