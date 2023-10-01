let quizData = JSON.parse(localStorage.getItem("quizData"));
let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsList = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  const resultElement = document.getElementById('result');

  if (currentQuestion < quizData.length) {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsList.innerHTML = '';
    question.options.forEach((option, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<input type="radio" name="option" value="${index}" id="option${index}">
                      <label for="option${index}">${option}</label>`;
      optionsList.appendChild(li);
    });

    submitButton.style.display = 'block';
    resultElement.style.display = 'none';
  } else {
    questionElement.style.display = 'none';
    optionsList.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
    resultElement.style.display = 'block';

    // Store the result in local storage
    localStorage.setItem('quizResult', JSON.stringify({ score: score, total: quizData.length }));
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) return;

  const selectedAnswer = parseInt(selectedOption.value);
  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  selectedOption.checked = false;

  if (currentQuestion < quizData.length) {we
    displayQuestion();
  } else {
    alert(`Quiz submitted!!`);

    // Store the result in local storage
    localStorage.setItem('quizResult', JSON.stringify({ score: score, total: quizData.length }));
  }
}

displayQuestion();
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
