var readlineSync=require("readline-sync");

var score = 0;
var userName= readlineSync.question("What is your name?");
var chalk = require("chalk");
console.log("Welcome "+ userName +  " give me the answers regarding Game Of Throne!");


function scoreBoard(score){
  if(score==25)
  {
    console.log(chalk.bold.yellow("great man! for the watch."))
  }
  if(score==5)
  {
    console.log(chalk.bold.red("watch all the seasons."))
  }
} 

//play function
function play(question,answer){
  var userAnaswer=readlineSync.question(question);
  if(userAnaswer.toUpperCase()==answer.toUpperCase()){
    console.log(chalk.green.bold("right! go ahead."));
    score=  score+5;
  }
  else
  {
    console.log(`you know nothing ${userAnaswer}`);
    score=  score-5;
  }
  console.log("current score:",score);
  console.log(chalk.cyan.bold ("------------------"));
  
}

//questions
var questions=[
    {
    question:" Mad king is the common name of King Aerys II Targaryen who was the father of " ,
    answer:"Viserys Targaryen"
},
{
    question:"The House of Black and White is a temple located in _____ dedicated to the Many-Faced God.",
    answer:"Bravos"
},
{
    question:"The meaning of “Valar morghulis.",
    answer:"all men must die."
},
{
    question:"The name of biggest libreary ?",
    answer:"citadel"
},
{
    question:"HODOR meaning is___!",
    answer:"Hold the door"
}
];

//for loop
for (var i =0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer )
}
console.log(chalk.bgRed("Yay your score:", score));
scoreBoard();