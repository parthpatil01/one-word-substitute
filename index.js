
var name;
var score=0;

var readfile=require('readline-sync');
const chalk=require('chalk');


var questionaire=[{
  question:"One who knows many languages: ",
  answer:"polyglot"
},{
  question:"A place where birds are kept: ",
  answer:"Aviary"
},{
  question:"A group of three people: ",
  answer:"trio"
  
},{
  question:"A person who does not believe in god: ",
  answer:"Atheist"
},{
  question:"A child who has lost its parents: ",
  answer:"orphan"
}];

var highScores = [
  {
    name: "Parth",
    score: 5,
  },

  {
    name: "Ayush",
    score: 5,
  },
  {
    name: "Diya",
    score: 4,
  },
]

function welcome(){
    name =  readfile.question("hello! welcome to the game. Please enter your name: ");
    console.log(chalk.red("Rules of the game: "));
    console.log("-Write one word describing the following senctences");
    console.log("All the best",name,"!");
}

function play(question,answer){
  var userAnswer=readfile.question(chalk.blue(question));
  if(answer.toLowerCase()===userAnswer.toLowerCase()){
    console.log("Correct!");
    score+=1;
  }else{
    console.log("Incorrect!");
  }
  console.log("Current score",score);
  console.log("-------------")
}


function end(){
  console.log("You've reached the end!");
  
  if(score==5){
    console.log("You've answered all the questions correctly!!");
  }
  
  console.log(chalk.green("Your score is: "),score);
  console.log("-------------")
  console.log("Check out the high scores, if you should be there send me a screenshot of your score and I'll add you there!");

  highScores.map(score => console.log(score.name, " : ", score.score))
  
}

function quiz(){
  for(var i=0;i<questionaire.length;i++){
  play(questionaire[i].question,questionaire[i].answer);
  }
}


welcome();
quiz();
end();