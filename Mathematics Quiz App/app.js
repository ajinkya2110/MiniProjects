//Create a maths question
//Maths question will be random generated


const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
let storedAnswer;
let score = 0;

const randonNumber = (min,max) =>{
    return Math.floor(Math.random()*(max - min + 1) + min);

};

// console.log('randonNumber',randonNumber(20,25));


const generateQuestion = () => {
    const randonNumber1 = randonNumber(1,10);
    const randonNumber2 = randonNumber(1,10);
    const questionType = randonNumber(1,4);

    let firstNumber;
    let secondNumber;

    if(randonNumber1 > randonNumber2 && questionType > 2){
        firstNumber = randonNumber1;
        secondNumber = randonNumber2;
    }else{
        firstNumber = randonNumber2;
        secondNumber = randonNumber1;
    }


    let question;
    let answer;
    // const question = ` ${randonNumber1} * ${randonNumber2} ?`;
    // const answer = randonNumber1 * randonNumber2;

    switch(questionType){
        case 1:
            question = `${firstNumber} * ${secondNumber} ?`
            answer = firstNumber * secondNumber;
            break;
        case 2:
            question = `${firstNumber} + ${secondNumber} ?`
            answer = firstNumber + secondNumber;
            break;
        case 3:
            question = `${firstNumber} / ${secondNumber} ?`
            answer = firstNumber / secondNumber;
            break;
        case 4:
            question = `${firstNumber} - ${secondNumber} ?`
            answer = firstNumber - secondNumber;
            break;
    }

    return {question,answer};
};



const showQuestion = () => {
    const { question, answer} = generateQuestion();
    questionEl.innerText = question;
    scoreEl.innerText = score;
    storedAnswer = answer;
};

showQuestion();

const checkAnswer = (event) =>{
event.preventDefault();

const formData = new FormData(questionFormEl);
const userAnswer =  +formData.get("answer");
if(userAnswer === storedAnswer){
score += 1;
Toastify({
    text: "Correct!!",
    className: "info",
    gravity:"bottom",
    position:"center",
    style: {
        color:"black",
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
}else{
    score -= 1;
    Toastify({
        text: "Wrong!!",
        className: "info",
        gravity:"bottom",
        position:"center",
        style: {
            color:"black",
            
          background: "linear-gradient(to right, #e33217, #ff001e)",
        }
      }).showToast();
}
scoreEl.innerText = score;
// localStorage.setItem("score",score)
event.target.reset();    //resets the answers
showQuestion();
};