//Dynamic rander ...question+options
//check option is selected..
//yess or no.....
//total score


const quiz =[                                 //object
{

    question :" Which type of JavaScript language is ___?",
    ans1text:"Object-Oriented",
    ans2text:"Object-Based",
    ans3text:"Assembly-language",
    ans4text:"High-level",
    answer:"Object-Based",
},

{
    question :"Which one of the following also known as Conditional Expression:",
    ans1text:"Alternative to if-else",
    ans2text:"Switch statement",
    ans3text:"If-then-else statement",
    ans4text:"immediate if",
    answer:"immediate if",
},
{
    question:" The function and  var are known as?",
    ans1text:"Keywords",
    ans2text:"Data types",
    ans3text:"Declaration statements",
    ans4text:"Prototypes",
    answer:"Declaration statements",
},
{
    question:"Which of the following number object function returns the value of the number?",
    ans1text:"toString()",
    ans2text:"valueOf()",
    ans3text:"toLocaleString()",
    ans4text:"toPrecision()",
    answer:"valueOf()",
}

]

const question =document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a= document.getElementById("text_option_a");
const option_b= document.getElementById("text_option_b");
const option_c= document.getElementById("text_option_c");
const option_d= document.getElementById("text_option_d");
const answerElement= document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");


let currentQuestion = 0;
let score= 0 ;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion]. ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent=quiz[currentQuestion]. ans1text;
option_b.textContent=quiz[currentQuestion]. ans2text;
option_c.textContent=quiz[currentQuestion]. ans3text;
option_d.textContent=quiz[currentQuestion]. ans4text;

// console.log("answer element" , answerElement);
// answerElement.forEach((answer) =>{
//     console.log(answer.checked);
// })


submit.addEventListener("click" , () =>{
   const checkedAns = document.querySelector('input[type="radio"]:checked');
   console.log(checkedAns);
//    console.log(checkedAns.nextElementSibling.textContent);

   if(checkedAns=== null){
    alert("Please select an answer");
   }else{
    if(checkedAns.nextElementSibling.textContent===quiz [currentQuestion].answer){
        score++;
    }
    
    currentQuestion++;
    if(currentQuestion< quiz.length){
        question.textContent = quiz[currentQuestion].question;
        option_a.textContent=quiz[currentQuestion]. ans1text;
        option_b.textContent=quiz[currentQuestion]. ans2text;
        option_c.textContent=quiz[currentQuestion]. ans3text;
        option_d.textContent=quiz[currentQuestion]. ans4text;
        checkedAns.checked = false;
    }else{
        alert("your score is "+score + quiz.length );
        location.reload();
    }
   }
});
