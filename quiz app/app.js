const questions = [
    {
        question:"Javascript is an _______ language?",
        answers: [
            {text:"Object-Oriented",correct:false},
            {text:"Object-Based",correct:true},
            {text:"Procedural",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            {text:"Var",correct:false},
            {text:"Let",correct:false},
            {text:"Const",correct:false},
            {text:"ALL of the above",correct:true},
        ]
    },
    {
        question:"How can a datatype be declared to be a constant type? ",
        answers: [
            {text:"Let",correct:false},
            {text:"Const",correct:true},
            {text:"Constant",correct:false},
            {text:"Var",correct:false},
        ]
    },
    {
        question:"What keyword is used to check whether a given property is valid or not?",
        answers: [
            {text:"lies",correct:false},
            {text:"in",correct:true},
            {text:"is in",correct:false},
            {text:"exists",correct:false},
        ]
    },
    {
        question:"When an operator’s value is NULL, the typeof returned by the unary operator is:",        
        answers: [
            {text:"boolean",correct:false},
            {text:"undefined",correct:false},
            {text:"object",correct:true},
            {text:"integer",correct:false},
        ]
    },
    {
        question:"Java Script File Has An Extension Of", 
        answers: [
            {text:".script",correct:false},
            {text:".js",correct:true},
            {text:".java",correct:false},
            {text:".xml",correct:false},
        ]
    },
    {
        question:"Which Of The Dialog Box Display a Message And a Data Entry Field?", 
        answers: [
            {text:"Prompt()",correct:true},
            {text:"Confirm()",correct:false},
            {text:"Msg()",correct:false},
            {text:"Alert()",correct:false},
        ]
    },
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Increment score for correct answer
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score: ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();