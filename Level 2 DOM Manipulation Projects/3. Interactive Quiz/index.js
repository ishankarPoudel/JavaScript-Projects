const questions = [{
        questionText: "What is the capital of France?",
        options: ["Berlin", "Paris", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        questionText: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        questionText: " Which programming language is often used for web development?",
        options: ["Python", "Java", "JavaScript", "c++"],
        correctAnswer: "JavaScript",
    },
    {
        questionText: ' Who wrote "Romeo and Juliet" ?',
        options: ["Shankar", "WS", "Milan", "sudeep"],
        correctAnswer: "WS",
    }
];




// const option = document.querySelector(".option");
// const questionOne = document.querySelector(".questionone");
// for (let i = 0; i < questions.length; i++) {
//     let questionshaha = `<div class="question${i+1}">
//      ${questions[i].questionText}
// </div>`;
//     questionOne.insertAdjacentHTML('afterend', questionshaha);
//     // displaying options for each questiions 
//     for (let j = 0; j < questions[i].options.length; j++) {
//         let optionhaha = ` <input type="radio" name="option" id="option1">${questions[i].options[j]}<br>`

//         option.insertAdjacentHTML('afterend', optionhaha);
//     }
// }
const questionOne = document.querySelector(".questionone");

for (let i = 0; i < questions.length; i++) {
    let questionHTML = `<div class="question${i + 1}">
        ${questions[i].questionText}
    </div>`;

    questionOne.insertAdjacentHTML('beforeend', questionHTML);



    for (let j = 0; j < questions[i].options.length; j++) {
        let optionHTML = `<input type="radio" name="option${i}" id="option${i}_${j}">
        ${questions[i].options[j]}<br>`;
        questionOne.insertAdjacentHTML('beforeend', optionHTML);
    }
}