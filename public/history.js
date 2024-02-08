const quizData = [
    {
      question: "In what year did the French Revolution begin?",
      options: ["1776", "1789", "1812"],
      correctAnswer: "1789"
    },
    {
      question: "Who was the first emperor of Rome?",
      options: ["Julius Caesar", "Augustus", "Nero"],
      correctAnswer: "Augustus"
    },
    {
      question: "What event triggered the start of World War I?",
      options: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Sinking of the Lusitania"],
      correctAnswer: "Assassination of Archduke Franz Ferdinand"
    },
    {
      question: "Who was the leader of the Bolshevik Revolution in Russia?",
      options: ["Lenin", "Trotsky", "Stalin"],
      correctAnswer: "Lenin"
    },
    {
      question: "Which treaty ended World War I?",
      options: ["Treaty of Versailles", "Treaty of Trianon", "Treaty of Brest-Litovsk"],
      correctAnswer: "Treaty of Versailles"
    },
    {
      question: "Who was the first female Prime Minister of the United Kingdom?",
      options: ["Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
      correctAnswer: "Margaret Thatcher"
    },
    {
      question: "What was the name of the ship that carried the pilgrims to America in 1620?",
      options: ["Mayflower", "Santa Maria", "Nina"],
      correctAnswer: "Mayflower"
    },
    {
      question: "Which city was the center of the Renaissance?",
      options: ["Florence", "Venice", "Rome"],
      correctAnswer: "Florence"
    },
    {
      question: "Who was the last pharaoh of ancient Egypt?",
      options: ["Cleopatra VII", "Ramses II", "Hatshepsut"],
      correctAnswer: "Cleopatra VII"
    },
    {
      question: "What was the name of the last dynasty to rule China?",
      options: ["Qing Dynasty", "Ming Dynasty", "Han Dynasty"],
      correctAnswer: "Qing Dynasty"
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