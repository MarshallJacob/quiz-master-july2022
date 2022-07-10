const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionCardEl = document.getElementById("question-card");
const timeRemaining = document.getElementById("timeRemaining");
// var correctAnswers = 
var timer = 60;
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById('answer-buttons');


let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});
// Function for setting the game in motion
function startGame () {
    startButton.classList.add("hide");
    questionCardEl.classList.remove("hide");
    nextButton.classList.remove("hide");
    timeRemaining.classList.remove("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion ();
    countDownTimer ();
};
// Allows for a random question to populate when answer is input and next button pressed
function setNextQuestion () {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
};
// Enables buttons to replace eachother without overlapping.
function resetState () {
    nextButton.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
};
// question pool
const question = [
    {
        question: "What is an array?",
        answers: [
            {text: "An ordered list of values", correct: true},
            {text: "A field of solar panels", correct: false},
            {text: "A sea creature", correct: false},
            {text: "A machine that takes xray images", correct: false}
        ]
    },
    {
        question: "What is a string in Javascript?",
        answers: [
            {text: "A sequence of one or more characters", correct: true},
            {text: "A piece of thread", correct: false},
            {text: "A bond between two mortals", correct: false},
            {text: "A line connecting two points together", correct: false}
        ]
    },
    {
        question: "What is a useful way to debug code in Javascript?",
        answers: [
            {text: "Screaming until your throat hurts", correct: false},
            {text: "Asking your html page what went wrong", correct: false},
            {text: "Using consol.log", correct: true},
            {text: "Daydreaming about something else", correct: false}
        ]
    },
    {
        question: "What is a Boolean in Java script?",
        answers: [
            {text: "That thing you see in bays", correct: false},
            {text: "Another sea creature", correct: false},
            {text: "A data type for True or False", correct: true},
            {text: "A tool used by mountain climbers", correct: false}
        ]
    },
    {
        question: "When was Java Script created?",
        answers: [
            {text: "1997", correct: false},
            {text: "2005", correct: false},
            {text: "1800", correct: false},
            {text: "1995", correct: true},
        ]
    }
];
// Allows for each question to be displayed and interacts with answers to verifiy weather or not the answers is correct.
function showQuestion (question) {
questionEl.innerText = question.question;
question.answers.forEach(answers => {
    var button = document.createElement("button");
    button.innerText = answers.text;
    button.classList.add("btn");
    if (answers.correct) {
        button.dataset.correct = answers.correct;
    } else wrongAnswer();
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
    });
};
//select answer function enables us to select from the multip answers 
//  while also verifying weather the selected answer is correct or not. 
function selectAnswer (e) {
    const selectButton = e.target;
    const correct = selectButton.dataset.correct;
    setStatusClass (document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    }; //else arrive to the final page
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    };
};

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
};

function countDownTimer () {
    timer = 60;
    timerRule = setInterval(function () {
        timeRemaining.innerHTML = "Time Remaining: " + timer;
        timer--;
        if(timer === 0) {
            timer = 0;
            finalScore();
        };
    }, 1000);
};

function wrongAnswer () {
   console.log("Wrong Answer!!!");
   timer = timer -= 5;
};

// function finalScore () {
//     correctAnswers
// }











// Plan
// 1. needs start button
// 2. needs html add elements
// 3. needs unteractive buttons for multiple choice questions
// 4. needs a timer
// 5. needs if statements for when questions are answered incorrectly
// 6. needs wrong answers to result in less time
// 7. needs answer response for right or wrong answers
// 8. needs final landing screen with
    // a. final statement
    // b. final score
    // c. initials submition bar
// 9. needs full failure criteria
    // a. if time reaches zero before all questions are answered
    // b. if all questions are answered incorectly and/or A happens. 








//         const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let shuffledQuestions, currentQuestionIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// function startGame() {
//   startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }

// function setNextQuestion() {
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

// function selectAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
//   } else {
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide')
//   }
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

// const questions = [
//   {
//     question: 'What is 2 + 2?',
//     answers: [
//       { text: '4', correct: true },
//       { text: '22', correct: false }
//     ]
//   },
//   {
//     question: 'Who is the best YouTuber?',
//     answers: [
//       { text: 'Web Dev Simplified', correct: true },
//       { text: 'Traversy Media', correct: true },
//       { text: 'Dev Ed', correct: true },
//       { text: 'Fun Fun Function', correct: true }
//     ]
//   },
//   {
//     question: 'Is web development fun?',
//     answers: [
//       { text: 'Kinda', correct: false },
//       { text: 'YES!!!', correct: true },
//       { text: 'Um no', correct: false },
//       { text: 'IDK', correct: false }
//     ]
//   },
//   {
//     question: 'What is 4 * 2?',
//     answers: [
//       { text: '6', correct: false },
//       { text: '8', correct: true }
//     ]
//   }]