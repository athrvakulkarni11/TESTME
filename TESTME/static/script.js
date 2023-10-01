// let quizData = [];

// function addQuestion() {
//   const questionInput = document.getElementById('question-input');
//   const optionsInput = document.getElementById('options-input');
//   const answerInput = document.getElementById('answer-input');

//   const question = questionInput.value.trim();
//   const options = optionsInput.value.split(",").map(option => option.trim());
//   const answer = parseInt(answerInput.value);

//   if (question === '' || options.length === 0 || isNaN(answer)) {
//     alert("Please fill in all fields with valid inputs.");
//     return;
//   }

//   const questionObj = {
//     question: question,
//     options: options,
//     answer: answer
//   };

//   quizData.push(questionObj);

//   // Clear input fields
//   questionInput.value = '';
//   optionsInput.value = '';
//   answerInput.value = '';

//   alert("Question added successfully!");
// }

// function generateQuiz() {
//   if (quizData.length === 0) {
//     alert("Please add at least one question before generating the quiz.");
//     return;
//   }

//   const quizDataString = JSON.stringify(quizData);
//   localStorage.setItem("quizData", quizDataString);
//   alert("Quiz generated successfully!");
//   window.location.href = "givetest.html";
// }

// document.getElementById('add-question-btn').addEventListener('click', addQuestion);
// document.getElementById('generate-quiz-btn').addEventListener('click', generateQuiz);


// script.js
let quizData = [];

function addQuestion() {
  const questionInput = document.getElementById('question-input');
  const optionsInput = document.getElementById('options-input');
  const answerInput = document.getElementById('answer-input');

  const question = questionInput.value.trim();
  const options = optionsInput.value.split(",").map(option => option.trim());
  const answer = parseInt(answerInput.value);

  if (question === '' || options.length === 0 || isNaN(answer)) {
    alert("Please fill in all fields with valid inputs.");
    return;
  }

  const questionObj = {
    question: question,
    options: options,
    answer: answer
  };

  quizData.push(questionObj);

  // Clear input fields
  questionInput.value = '';
  optionsInput.value = '';
  answerInput.value = '';

  alert("Question added successfully!");
}

function generateQuiz() {
  if (quizData.length === 0) {
    alert("Please add at least one question before generating the quiz.");
    return;
  }

  const quizDataString = JSON.stringify(quizData);
  localStorage.setItem("quizData", quizDataString);
  alert("Quiz generated successfully!");
  window.location.href = "/givetest";
}

document.getElementById('add-question-btn').addEventListener('click', addQuestion);
document.getElementById('generate-quiz-btn').addEventListener('click', generateQuiz);
