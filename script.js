const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setnextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore = 0;
}

function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question; // Set the question text
    
    answerButtonsElement.innerHTML = ''; // Clear previous answers

    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }

    if (correct) {
        quizScore++;
    }

    document.getElementById('right-answers').innerText = `Score: ${quizScore}`;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'React', correct: true },
            { text: 'Spring', correct: false },
        ],
    },
    {
        question: 'Which HTML tag is used to define an unordered list?',
        answers: [
            { text: '<ol>', correct: false },
            { text: '<ul>', correct: true },
            { text: '<li>', correct: false },
            { text: '<div>', correct: false },
        ],
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Creative Style System', correct: false },
            { text: 'Colorful Style Syntax', correct: false },
            { text: 'Computer Style Sheets', correct: false },
        ],
    },
    {
        question: 'Which of these is a relational database?',
        answers: [
            { text: 'MongoDB', correct: false },
            { text: 'MySQL', correct: true },
            { text: 'Redis', correct: false },
            { text: 'Firebase', correct: false },
        ],
    },
    {
        question: 'Which JavaScript keyword is used to declare a variable?',
        answers: [
            { text: 'let', correct: true },
            { text: 'function', correct: false },
            { text: 'if', correct: false },
            { text: 'class', correct: false },
        ],
    },
    {
        question: 'Which HTTP method is used to update data on a server?',
        answers: [
            { text: 'GET', correct: false },
            { text: 'POST', correct: false },
            { text: 'PUT', correct: true },
            { text: 'DELETE', correct: false },
        ],
    },
    {
        question: 'Which company developed the Java programming language?',
        answers: [
            { text: 'Microsoft', correct: false },
            { text: 'Sun Microsystems', correct: true },
            { text: 'Google', correct: false },
            { text: 'Oracle', correct: false },
        ],
    },
    {
        question: 'What is the output of 2 + "2" in JavaScript?',
        answers: [
            { text: '4', correct: false },
            { text: '22', correct: true },
            { text: 'NaN', correct: false },
            { text: 'undefined', correct: false },
        ],
    },
    {
        question: 'Which of these is not a version control system?',
        answers: [
            { text: 'Git', correct: false },
            { text: 'SVN', correct: false },
            { text: 'Docker', correct: true },
            { text: 'Mercurial', correct: false },
        ],
    },
    {
        question: 'Which company developed the Java programming language?',
        answers: [
            { text: 'Microsoft', correct: false },
            { text: 'Sun Microsystems', correct: true },
            { text: 'Google', correct: false },
            { text: 'Oracle', correct: false },
        ],
    },
];
