



function checkAnswer() {

    const correctAnswer = "4";

    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = null;
 
     if(selectedRadioButton){
         userAnswer = selectedRadioButton.value;
     }
     
     const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }

};
const SubmitAnswer = document.getElementById("submit-answer");
SubmitAnswer.addEventListener('click', checkAnswer);


