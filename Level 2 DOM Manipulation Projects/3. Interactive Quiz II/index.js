let questionsList = [{
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which programming language is often used for web development?",
        options: ["Java", "Python", "HTML", "JavaScript"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1931"],
        correctAnswer: "1912"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Emily Brontë"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        correctAnswer: "Japan"
    },

    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },


];
//takiing references  of questions and options
const questionsArea = document.querySelector(".actualquestion");
const optionsArea = document.querySelector(".optionscontainer");
//taking references of previous and next questions
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
let currentQuestion = 0;
let sum = 0;
//event listener for next button click and rendering questioions
nextButton.addEventListener("click", () => {
    const userAnswers = document.querySelectorAll("input[type=checkbox]:checked");
    userAnswers.forEach(answer => {
        const selectedOption = answer.value;
        const correctAnswer = questionsList[currentQuestion - 1].correctAnswer;

        console.log('User selected:', selectedOption);

        if (selectedOption === correctAnswer) {
            console.log('Correct answer!');
            sum = sum + 1;
        }
    });


    renderQuestions();

});
const renderQuestions = () => {
    if (currentQuestion >= 0 && currentQuestion < questionsList.length) {
        questionsArea.innerHTML = '';
        questionsArea.insertAdjacentHTML("afterbegin", `Question #${currentQuestion + 1} ${questionsList[currentQuestion].question}`)

        //rendering options
        optionsArea.innerHTML = "";
        for (let i = 0; i < questionsList[currentQuestion].options.length; i++) {
            optionsArea.insertAdjacentHTML("afterbegin", `
    <input type="checkbox" id="option${i}" name="interest" value="${questionsList[currentQuestion].options[i]}" >${questionsList[currentQuestion].options[i]}<br>`)
        }
        currentQuestion++;
    } else {
        questionsArea.innerHTML = "Your Result:"
        optionsArea.innerHTML = `${sum} out of ${questionsList.length} !!!`;
    }
}


//event listener for previous button:
previousButton.addEventListener("click", () => {
    renderQuestionsII();

});
const renderQuestionsII = () => {

    currentQuestion--;

    if (currentQuestion >= 0 && currentQuestion < questionsList.length) {
        questionsArea.innerHTML = '';
        questionsArea.insertAdjacentHTML("afterbegin", `Question #${currentQuestion+1} ${questionsList[currentQuestion].question}`)

        //rendering options
        optionsArea.innerHTML = "";
        for (let i = 0; i < questionsList[currentQuestion].options.length; i++) {
            optionsArea.insertAdjacentHTML("afterbegin", `
    <input type="checkbox" id="option${i}" name="interest" value="${questionsList[currentQuestion].options[i]}" >${questionsList[currentQuestion].options[i]}<br>`)
        }
    }
}