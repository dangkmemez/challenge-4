//Variables
const questionEl = $("#question");
const questionContainerEl = $("#question-container");
const startButtonEl = $("#start-btn");
const showTimer = $("#timeClock");
const answerBtnsEl = $("#answer-btns");
const directionsEl = $("#directions");
const controlsEl = $("#controls");
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

function startQuiz() {
    startTimer();
    startButton.classList.add("hide");
    introEl.classList.add("hide");

    cycledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;

    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}



//Timer

function startTimer() {
    interval = setInterval(function() {
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

$("startButtonEl").click(startQuiz);

