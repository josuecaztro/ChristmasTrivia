//stating DOM elements
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const restartDiv = document.querySelector("#restart-div");
const stageOne = document.querySelector("#stage-one");
const speechBubble = document.querySelector("#speech-bubble");
const continueButton = document.querySelector("#continue-button");
const stageTwo = document.querySelector("#stage-two");
const questionCounter = document.querySelector("#question-counter");
const answerAButton = document.querySelector("#answer-a");
const answerBButton = document.querySelector("#answer-b");
const answerCButton = document.querySelector("#answer-c");
const answerDButton = document.querySelector("#answer-d");
const selectionClass = document.querySelector(".selected");
const progressBar = document.querySelector("#progress-bar");
const progress1 = document.querySelector("#uno");
const progress2 = document.querySelector("#dos");
const progress3 = document.querySelector("#tres");
const progress4 = document.querySelector("#cuatro");
const progress5 = document.querySelector("#cinco");
const progress6 = document.querySelector("#seis");
const progress7 = document.querySelector("#siete");
const progress8 = document.querySelector("#ocho");
const progress9 = document.querySelector("#nueve");
const progress10 = document.querySelector("#diez");
const stageTwoDelete = document.querySelector("#stage-two-non-title");
const nameInput = document.querySelector("#name-input");
const rightClasses = document.querySelector(".right-reveal");

//Any Trackers or Counters
let clicks = 0;
let askedQuestions = 0;
let selected = 0;
let chosenAnswer;
let correctCounter = 0;
let rounds = 0;
let userName;

//Array for Correct Answers
let correctAnswers = [
"KEVIN MCCALLISTER","BOBBY HELMS","OLD SILK HAT",
"VICTORIAN ENGLAND","MILK, NUTMEG, BRANDY","WITH HOLIDAY CHEER",
"SPAGHETTI","GERMANY","MAX","JACOB MARLEY",
];

//Array of questions (functions A-J). You can add more later.
let questions = [
    function showQuestionA (){
        askedQuestions++;
        generateAnswers(answersA);
        speechBubble.textContent = "In the movie Home Alone, what is the name of the young boy who gets left behind by his family during Christmas vacation?";
    }, 
    function showQuestionB (){
        askedQuestions++;
        generateAnswers(answersB);
        speechBubble.textContent = "Which famous singer is known for singing the song \"Jingle Bell Rock?\"";
    },
    function showQuestionC (){
        askedQuestions++;
        generateAnswers(answersC);
        speechBubble.textContent = "What is the magical accessory that brings Frosty the Snowman to life?";
    },
    function showQuestionD (){
        askedQuestions++;
        generateAnswers(answersD);
        speechBubble.textContent = "In Charles Dickens' \"A Christmas Carol\", what is the setting of the story?";
    },
    function showQuestionE (){
        askedQuestions++;
        generateAnswers(answersE);
        speechBubble.textContent = "What are the three main ingredients in the traditional Christmas drink, eggnog?";
    },
    function showQuestionF (){
        askedQuestions++;
        generateAnswers(answersF);
        speechBubble.textContent = "Finish the lyrics: \"It's the most wonderful time of the year, with the kids jingle belling and everyone telling you...\"";
    },
    function showQuestionG (){
        askedQuestions++;
        generateAnswers(answersG);
        speechBubble.textContent = "In the movie \"Elf,\" what is the main character Buddy's favorite type of pasta?";
    },
    function showQuestionH (){
        askedQuestions++;
        generateAnswers(answersH);
        speechBubble.textContent = "What country is credited with the tradition of putting up the first Christmas tree?";
    },
    function showQuestionI (){
        askedQuestions++;
        generateAnswers(answersI);
        speechBubble.textContent = "In Dr. Seuss's \"How the Grinch Stole Christmas,\" what is the name of the Grinch's dog?";
    },
    function showQuestionJ (){
        askedQuestions++;
        generateAnswers(answersJ);
        speechBubble.textContent = "In Charles Dickens' \"A Christmas Carol,\" who is Scrooge's deceased business partner?";
    },
];

//to initiate the beginning display
stageOne.style.display = "none";
stageTwo.style.display = "none";

//all Buttons with Event Listeners
startButton.addEventListener("click", () => {
    if (stageOne.style.display === "none"){
        stageOne.style.display = "block";
    } else {
        stageOne.style.display = "none";
    }
    startButton.style.display = "none";
    speechBubble.textContent = "Hi There!";
}
);

//makes the flow of your game work
continueButton.addEventListener("click", ()=>{
        clicks++;
        if (clicks === 1){
        speechBubble.textContent = "I'm Santa! What's your name?";
        nameInput.style.display = "block";
        } else if (clicks === 2){
            fakeUserName = nameInput.value;
            userName = capitalizeName(fakeUserName);
            speechBubble.textContent = `Wow, nice to meet you ${userName}!`;
            nameInput.style.display = "none";
        } else if (clicks === 3){
            speechBubble.textContent = "My job is to make sure you pass this Christmas trivia!"
        } else if (clicks === 4){
            speechBubble.textContent = "Please refrain from cheating! \n(Using the web, google, a friend, etc.)";
        } else if (clicks === 5){
            speechBubble.textContent = "You'll be asked a set of ten questions. You only need a 70% score to pass.";
        } else if (clicks === 6){
            speechBubble.textContent = `Good luck ${userName},  and don't be naughty!`;
        } else if (clicks === 7){
            selected = 1;
            speechBubble.textContent = "First question...";
        } else if (askedQuestions >= 0 && askedQuestions < 10 && selected === 1){
            generateScore();
            console.log(chosenAnswer);
            progressBar.style.display = "flex";
            stageTwo.style.display = "block";
            answerAButton.classList.remove("selected");
            answerBButton.classList.remove("selected");
            answerCButton.classList.remove("selected");
            answerDButton.classList.remove("selected");
            selected = 0;
            generateQuestion();
            restartDiv.style.display = "block";
        } else if (askedQuestions >= 1 && askedQuestions < 10 && selected > 1){
            alert("You can only select ONE option.");
        } else if (askedQuestions >= 1 && askedQuestions < 10 && selected < 1){
            alert("You have to pick SOMETHING.");
        } else if (askedQuestions > 10){
            speechBubble.textContent = "The game is over. Not sure if you won or not.";
            stageTwo.style.display = "none";
        }
        updateProgressBar();
        generateEnding();
        }
);
    

//function name speaks for itself
function generateQuestion(){
    let randomIndex = Math.floor(Math.random() * questions.length);
    let result = questions[randomIndex];
    result();
    questions.splice(randomIndex, 1);
    questionCounter.textContent = "QUESTION #" + askedQuestions;
}

//all arrays with answers for each question
let answersA = ["KEVIN MCCALLISTER", "PETER MCCALLISTER", "HARRY MCCALLISTER", "MICHAEL MCCALLISTER"];
let answersB = ["ELVIS PRESLEY", "BING CROSBY", "FRANK SINATRA", "BOBBY HELMS"];
let answersC = ["MAGIC HAT", "SCARF", "CARROT NOSE", "OLD SILK HAT"];
let answersD = ["VICTORIAN ENGLAND", "INDUSTRIAL REVOLUTION-ERA LONDON", "COLONIAL AMERICA", "ANCIENT ROME"];
let answersE = ["MILK, NUTMEG, BRANDY", "CREAM, CINNAMON, RUM", "EGGS, SUGAR, WHISKEY", "MILK, VANILLA, BOURBON"];
let answersF = ["WITH JOY IN THE AIR", "WITH LOVED ONES NEAR", "WITH HOLIDAY CHEER", "IT'S THE HAP-HAPPIEST SEASON OF ALL"];
let answersG = ["SPAGHETTI", "FETTUCCINE", "RIGATONI", "PENNE"];
let answersH = ["GERMANY", "SWEDEN", "FRANCE", "ITALY"];
let answersI = ["MAX", "WHISKERS", "RUDOLPH", "MAXINE"];
let answersJ = ["BOB MARLEY", "JACOB MARLEY", "MARLEY AND ME", "MARLEY SHELTON"];


/* IMPORTANT: this generates all 4 randomized answers for any question
It takes the array answers as the parameter */
function generateAnswers(anyArray){
    let randomIndexAnswers = Math.floor(Math.random() * anyArray.length);
    let w = anyArray[randomIndexAnswers];
    answerAButton.textContent = w;
    anyArray.splice(randomIndexAnswers, 1);
    randomIndexAnswers = Math.floor(Math.random() * anyArray.length);
    let x = anyArray[randomIndexAnswers];
    answerBButton.textContent = x;
    anyArray.splice(randomIndexAnswers,1);
    randomIndexAnswers = Math.floor(Math.random() * anyArray.length);
    let y = anyArray[randomIndexAnswers];
    answerCButton.textContent = y;
    anyArray.splice(randomIndexAnswers,1);
    randomIndexAnswers = Math.floor(Math.random() * anyArray.length);
    let z = anyArray[randomIndexAnswers];
    answerDButton.textContent = z;
    anyArray.splice(randomIndexAnswers,1);
}

//Restart Button Functionality
restartButton.addEventListener("click", () => {
    location.reload();
}   
)

//functionality when you select an Answer option
answerAButton.addEventListener("click", selectAnswer);
answerBButton.addEventListener("click", selectAnswer);
answerCButton.addEventListener("click", selectAnswer);
answerDButton.addEventListener("click", selectAnswer);

//part of functionality when you select an Answer option
function selectAnswer (){
    if (this.classList.contains("selected")){
        this.classList.remove("selected");
        selected--;
        chosenAnswer;
    } else {
        this.classList.add("selected");
        selected++;
        chosenAnswer = this.textContent;
}};

//makes the Visual Progress Bar work correctly
function updateProgressBar (){
    if (askedQuestions === 2){
        progress1.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress1.classList.add("right-reveal");
        } else {
            progress1.classList.add("wrong-reveal");
        }
    }
    if (askedQuestions === 3){
        progress2.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress2.classList.add("right-reveal");
        } else {
            progress2.classList.add("wrong-reveal");
        }
    }
    if (askedQuestions === 4){
        progress3.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress3.classList.add("right-reveal")
        } else {
            progress3.classList.add("wrong-reveal");
        }
    }
    if (askedQuestions === 5){
        progress4.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress4.classList.add("right-reveal")
        } else {
            progress4.classList.add("wrong-reveal")
        }
    }
    if (askedQuestions === 6){
        progress5.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress5.classList.add("right-reveal")
        } else {
            progress5.classList.add("wrong-reveal")
        }
    }
    if (askedQuestions === 7){
        progress6.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress6.classList.add("right-reveal")
        } else {
            progress6.classList.add("wrong-reveal")
        }
    }
    if (askedQuestions === 8){
        progress7.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress7.classList.add("right-reveal")
        } else {
            progress7.classList.add("wrong-reveal")
        }
    }
    if (askedQuestions === 9){
        progress8.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress8.classList.add("right-reveal")
        } else {
            progress8.classList.add("wrong-reveal")
        }
    }
    if (askedQuestions === 10 && selected === 0){
        progress9.style.transition = "background-color 0.5s ease";
        if (correctAnswers.includes(chosenAnswer)){
            progress9.classList.add("right-reveal")
        } else {
            progress9.classList.add("wrong-reveal")
        }
    }
}

//Gives final end message if you won on Stage Two
function generateEnding (){
    if (askedQuestions === 10 && selected === 1){
        if (correctAnswers.includes(chosenAnswer)){
            progress10.classList.add("right-reveal")
        } else {
            progress10.classList.add("wrong-reveal")
        }
        generateScore();
        progressBar.style.display = "flex";
        progress10.style.transition = "background-color 0.5s ease";
        generateStageTwoFinalMessage();
        generateFinalMessage();
        continueButton.style.display = "none";
        revealFinalProgress();
    }
}

//passed every Round to keep track of Score
function generateScore (){
if (correctAnswers.includes(chosenAnswer)){
    rounds++;
    console.log("One Point for Being Correct.");
    console.log(rounds);
    correctCounter++;
} else {
    rounds++;
    console.log("Nothing happens");
    console.log(rounds);
}
};

//Gives Final Message on Speech Bubble
function generateFinalMessage (){
    if (correctCounter === 10){
        speechBubble.textContent = `100%? Did you cheat?! That's impressive! Good job, ${userName}!`
        restartButton.textContent = "PLAY AGAIN";
    } else if (correctCounter === 9 || correctCounter === 8){
        speechBubble.textContent = "Wow, good job. You got " + correctCounter + " questions right!";
        restartButton.textContent = "PLAY AGAIN";
    } else if (correctCounter === 7){
        speechBubble.textContent = "You just barely passed! You got seven questions right, nice!";
        restartButton.textContent = "PLAY AGAIN";
    } else if (correctCounter > 2 && correctCounter < 7){
        speechBubble.textContent = "You Lost! You got " + (10 - correctCounter) + " questions wrong!";
        restartButton.textContent = "TRY AGAIN";
    } else if (correctCounter <= 2){
        speechBubble.textContent = "Wow, you are AWFUL at Christmas. How did you get " + (10 - correctCounter) + " questions wrong?!";
        restartButton.textContent = "TRY AGAIN";
    }
};





//generates message for Stage 2 based off Score
function generateStageTwoFinalMessage (){
    stageTwoDelete.style.display = "none";
    questionCounter.textContent = `${userName}'s Score: ` + (correctCounter * 10) + `%`;
    questionCounter.style.paddingBottom = "20px";
};

/* this is stupid i know theres any easier way to do this 
rather than right all this dumbass code */
function revealFinalProgress(){
    if (progress1.classList.contains("right-reveal")){
            progress1.style.backgroundColor = "green";
        } else {
            progress1.style.backgroundColor = "red";
        }
    if (progress2.classList.contains("right-reveal")){
            progress2.style.backgroundColor = "green";
        } else {
            progress2.style.backgroundColor = "red";
        }
    if (progress3.classList.contains("right-reveal")){
            progress3.style.backgroundColor = "green";
        } else {
            progress3.style.backgroundColor = "red";
        }
    if (progress4.classList.contains("right-reveal")){
            progress4.style.backgroundColor = "green";
        } else {
            progress4.style.backgroundColor = "red";
        }
    if (progress5.classList.contains("right-reveal")){
            progress5.style.backgroundColor = "green";
        } else {
            progress5.style.backgroundColor = "red";
        }
    if (progress6.classList.contains("right-reveal")){
            progress6.style.backgroundColor = "green";
        } else {
            progress6.style.backgroundColor = "red";
        }
    if (progress7.classList.contains("right-reveal")){
            progress7.style.backgroundColor = "green";
        } else {
            progress7.style.backgroundColor = "red";
        }
    if (progress8.classList.contains("right-reveal")){
            progress8.style.backgroundColor = "green";
        } else {
            progress8.style.backgroundColor = "red";
        }
    if (progress9.classList.contains("right-reveal")){
            progress9.style.backgroundColor = "green";
        } else {
            progress9.style.backgroundColor = "red";
        }
    if (progress10.classList.contains("right-reveal")){
            progress10.style.backgroundColor = "green";
        } else {
            progress10.style.backgroundColor = "red";
        }
}


function capitalizeName (name){
    return name.charAt(0).toUpperCase() + name.slice(1);
};