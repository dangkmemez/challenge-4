//Variables

const highscoreBtn = document.getElementById("highscore-btn");
const clearBtn = document.getElementById("clear-btn");
const reloadBtn = document.getElementById("reload-btn");
const showTimer = document.getElementById("timeClock");
const startButton = document.getElementById("start-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerBtnsEl = document.getElementById("answer-btns");
const controlsEl = document.getElementById("controls");
const directionsEl = document.getElementById("directions");
const gameOverEl = document.getElementById("gameOverEl");
const scoreDisplay = document.getElementById("score");
let cycledQuestions;
let currentQuestionIndex;

//timer vars
var counter = 60;
var interval;

//Questions
let questions = [
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: [
            { text: "All of the above", correct: true },
            { text: "Numbers and strings", correct: false },
            { text: "Other arrays", correct: false },
            { text: "Booleans", correct: false }
        ],
    },
    {
        question: "The condition in an if / else statement is enclosed within:",
        answers: [
            { text: "Quotation marks", correct: true },
            { text: "Curly brackets", correct: false },
            { text: "Parentheses", correct: false },
            { text: "Square brackets", correct: false }
        ],
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: [
            { text: "Quotation marks", correct: true },
            { text: "Curly brackets", correct: false },
            { text: "Commas", correct: false },
            { text: "Parentheses", correct: false }
        ],
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "Alerts", correct: true },
            { text: "Strings", correct: false },
            { text: "Numbers", correct: false },
            { text: "Booleans", correct: false }
        ],
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "Console log", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Terminal / bash", correct: false },
            { text: "For loops", correct: false }
        ],
    },
];

//starts the quiz and timer
function startQuiz() {
    startTimer();
    startButton.classList.add("hide");
    directionsEl.classList.add("hide");

    cycledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;

    questionContainerEl.classList.remove("hide");
    nextQuestion();
}

//shows next question
function nextQuestion() {
    reset();
    showQuestion(cycledQuestions[currentQuestionIndex]);
}
//shows questions and answers
function showQuestion(question) {
    questionEl.innerText = question.question;

    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerBtnsEl.appendChild(button);
    });
}
//clears answers
function reset() {
    while (answerBtnsEl.firstChild) {
        answerBtnsEl.removeChild(answerBtnsEl.firstChild);
    }
}

//select answers and check to see if answer is right
function selectAnswer(event) {

    let selectedButton = event.target;
    let correct = selectedButton.dataset.correct;

    if (correct) {
        correctAnswer();
    }
    else {
        wrongAnswer();
    }

    if (cycledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        nextQuestion();
    }
    else {
        endGame();
    }
}

//Timer
function startTimer() {
    interval = setInterval(function () {
        counter--;
        if (counter >= 0) {
            showTimer.innerHTML = counter;
        }
        if (counter <= 0) {
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}


//Event listener

startButton.addEventListener("click", startQuiz);

