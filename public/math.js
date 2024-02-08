const quizData = [
  {
    question: "What is the result of 2 + 2?",
    options: ["3", "4", "5"],
    correctAnswer: "4"
  },
  {
    question: "If x = 3, what is the value of 2x?",
    options: ["4", "6", "8"],
    correctAnswer: "6"
  },
  {
    question: "What is the square root of 25?",
    options: ["3", "5", "7"],
    correctAnswer: "5"
  },
  {
    question: "What is the product of 6 and 7?",
    options: ["36", "42", "49"],
    correctAnswer: "42"
  },
  {
    question: "If a triangle has angles of 30°, 60°, and 90°, what type of triangle is it?",
    options: ["Equilateral", "Isosceles", "Right-angled"],
    correctAnswer: "Right-angled"
  },
  {
    question: "What is the value of π (pi) to two decimal places?",
    options: ["3.14", "3.21", "3.28"],
    correctAnswer: "3.14"
  },
  {
    question: "What is the result of 8 divided by 2?",
    options: ["2", "4", "6"],
    correctAnswer: "4"
  },
  {
    question: "If y = 2x and x = 5, what is the value of y?",
    options: ["5", "10", "15"],
    correctAnswer: "10"
  },
  {
    question: "What is the sum of the angles in a triangle?",
    options: ["90°", "180°", "360°"],
    correctAnswer: "180°"
  },
  {
    question: "If a square has sides of length 4 units, what is its perimeter?",
    options: ["12 units", "16 units", "20 units"],
    correctAnswer: "16 units"
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const listItem = document.createElement("li");
    listItem.className = "option";
    listItem.textContent = option;
    listItem.onclick = () => checkAnswer(option);
    optionsList.appendChild(listItem);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    document.getElementById("score").textContent = "Score: " + score;
    alert("Correct! You earned 1 point.");
  } else {
    alert(`Incorrect. The correct answer is ${currentQuestion.correctAnswer}`);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    alert("Quiz completed! Your final score is " + score + " points.");
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = "Score: 0";
    displayQuestion();
    
  }
}


displayQuestion();