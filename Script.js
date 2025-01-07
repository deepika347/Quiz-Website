const quizDB = [
    {
    question: "Q1: What is the full form of HTTP?",
    a: "Hypertext Transfer Product",
    b: "Hypertext Test Protocol",
    c: "Hey Transfer Protocol",
    d: "Hypertext Transfer Protocol",
    ans:"ans4"
},{
    question: "Q2: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup language",
    c: "HyperText Makeup Language",
    d: "HyperText markup Language",
    ans:"ans4"
},
{
    question: "Q3: What is the full form of CSS?",
    a: "CasCading Style Sheets",
    b: "CasCading Style Sheep",
    c: "Cartoon style Sheets",
    d: "CasCading Super Sheets",
    ans: "ans1"
},
{
    question: "Q4: What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustSuper",
    d: "JordenShoes",
    ans: "ans1"
}
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const  answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
    
}

loadQuestion();

 const getCheckedAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }
  });

  return answer
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener("click" , () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer ==quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    } 
 });