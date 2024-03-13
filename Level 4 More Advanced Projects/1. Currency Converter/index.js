shankar();
async function shankar() {
    try {
        let url = "https://v6.exchangerate-api.com/v6/38475b75ee177ad6f6eb7bc2/latest/USD";
        let data = await fetch(url);
        if (!data.ok) {
            throw new Error("something went wrong!");
        }
        let pureData = await data.json();
        // Get all currency codes
        let currencyCodes = Object.keys(pureData.conversion_rates);
        // console.log(currencyCodes);

        //getting the currency codes in the select > options
        let countryName = document.querySelectorAll("#currencycodefrom, #currencycodeto");
        countryName.forEach(select => {
            currencyCodes.forEach(items => {
                let newOption = document.createElement("option");
                newOption.value = items;
                newOption.text = items;
                select.appendChild(newOption);
            });

        });
    } catch {
        console.error("Error");
    }
    //getting the options that user selected 

    const button = document.querySelector("#button");
    const result = document.querySelector(".result")


    //listening event on button click
    button.addEventListener('click', () => {
        const fromData = document.querySelector("#currencycodefrom").value;
        const toData = document.querySelector("#currencycodeto").value;
        const amount = document.querySelector("#number").value;
        const ghum = document.querySelector(".ghum");

        ghum.classList.add("hero");


        result.innerHTML = `Converting Currencies......`
        setTimeout(() => {
            result.innerHTML = `Fetching Results......`;
        }, 2000)
        setTimeout(() => {
            getRates();
            ghum.classList.remove("hero");
        }, 4000);


        // fetching data form api to get excchnag rates:
        async function getRates() {
            try {
                let link = `https://v6.exchangerate-api.com/v6/38475b75ee177ad6f6eb7bc2/pair/${fromData}/${toData}/${amount}`;
                let rates = await fetch(link);
                if (!rates.ok) {
                    throw new Error("Opps! something went wrong");
                }
                let ratesII = await rates.json();
                let finalRates = (ratesII.conversion_result);

                result.innerText = `${amount} ${fromData} is equivalent to ${toData} ${finalRates}`;

            } catch {
                result.innerHTML = `Opps! something went wrong`;
            }
        }


    });


}