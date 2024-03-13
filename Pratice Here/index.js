const info = {
    "name": "Shankar",
    age: 21,
    address: "27 strode drive",
    status: "developer"

};
let final = JSON.stringify(info);
localStorage.setItem("data of shankar", final);
console.log(localStorage.getItem("data of shankar"));
localStorage.removeItem("data of shankar");