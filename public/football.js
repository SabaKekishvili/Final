const quizData = [
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["Brazil", "Argentina", "France"],
      correctAnswer: "France"
    },
    {
      question: "Who is the all-time top scorer in the UEFA Champions League?",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski"],
      correctAnswer: "Cristiano Ronaldo"
    },
    {
      question: "Which player has won the most Ballon d'Or awards?",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Pelé"],
      correctAnswer: "Lionel Messi"
    },
    {
      question: "Which team has won the most English Premier League titles?",
      options: ["Manchester United", "Liverpool", "Chelsea"],
      correctAnswer: "Manchester United"
    },
    {
      question: "Who is the only player to have won the FIFA World Cup as both a player and a coach?",
      options: ["Diego Maradona", "Franz Beckenbauer", "Zinedine Zidane"],
      correctAnswer: "Franz Beckenbauer"
    },
    {
      question: "Which country has won the most Copa America titles?",
      options: ["Argentina", "Brazil", "Uruguay"],
      correctAnswer: "Uruguay"
    },
    {
      question: "Who is the fastest player to score 100 goals in the English Premier League?",
      options: ["Alan Shearer", "Sergio Agüero", "Harry Kane"],
      correctAnswer: "Harry Kane"
    },
    {
      question: "Which club has won the most UEFA Champions League titles?",
      options: ["Real Madrid", "Barcelona", "Bayern Munich"],
      correctAnswer: "Real Madrid"
    },
    {
      question: "Who was the top scorer in the 2014 FIFA World Cup?",
      options: ["Lionel Messi", "Thomas Müller", "James Rodríguez"],
      correctAnswer: "James Rodríguez"
    },
    {
      question: "Which player has won the most FIFA World Cup Golden Balls?",
      options: ["Diego Maradona", "Lionel Messi", "Pelé"],
      correctAnswer: "Diego Maradona"
    }
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