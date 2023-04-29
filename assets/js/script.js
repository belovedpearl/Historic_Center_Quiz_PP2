let questions = [
    {
        question: "assets/images/quizImages/acropolis-athens.webp",
        options: ["Acapolis Athens","Athens Lavent","Acapolis Lavent", "Lavent Acapolis"],
        answer: "Acapolis Athens"
    },
    {
        question: "assets/images/quizImages/ankor-wat-temple.webp",
        options: ["Angkor Siem","Athens Greece","Ankor Wat Cmbodia","Bayon Temple"],
        answer: "Ankor Wat Cmbodia"
    },
    {
        question: "assets/images/quizImages/easter-island.webp",
        options: ["Puna Pau Island","Easter Island Chile","Museum Santiago","Hanga Roa"],
        answer: "Easter Island Chile"
    },
    {
        question: "assets/images/quizImages/borobudur-indonesia.webp",
        options: ["Boudur Indonesia","Badrawati China","Borobudur Indonesia","Borobudur Malaysia"],
        answer: "Borobudur Indonesia"
    },
    {
        question: "assets/images/quizImages/efes-turkey.webp",
        options: ["Arzawan Home","Efes Turkey","Artemis Turkey","Ephesos Celsus"],
        answer: "Efes Turkey"
    },
    {
        question: "assets/images/quizImages/colosseum-rome.webp",
        options: ["Colosseum Rome Italy","Greater Hall India","Colosseum Hall China","Doloseum Italy"],
        answer: "Colosseum Rome Italy"
    },
    {
        question: "assets/images/quizImages/effiel-tower.webp",
        options: ["Leaning Tower of Pisa","Kjiv TV Tower Ukraine","Effiel Tower France","Avala Tower Serbia"],
        answer: "Effiel Tower France"
    },
    {
        question: "assets/images/quizImages/forbidden-city-beijing.webp",
        options: ["Forbidden City Beijing","Tranducheng Shangai","Nanjing Road China","Lingerin Garden Budha"],
        answer: "Forbidden City Beijing"
    },
    {
        question: "assets/images/quizImages/greatsphinx-giza.webp",
        options: ["Great Sphere of Giza Isreal","Pyramid of Khafre","Pyramid of Djoser","Great Sphinx of Giza Egypt"],
        answer: "Great Sphinx of Giza Egypt"
    },
    {
        question: "assets/images/quizImages/great-wallof-china.webp",
        options: ["Great Wall of China","Hadrian's Wall","Berlin Wall","Western wall"],
        answer: "Great Wall of China"
    },
    {
        question: "assets/images/quizImages/hagia-sophia.webp",
        options: ["Hagia Irene Istanbul","Sultan Wall Istanbul","Hagia Sophia Istanbul","None of the Above"],
        answer: "Hagia Sophia Istanbul"
    },
    {
        question: "assets/images/quizImages/london-tower.webp",
        options: ["Shangai Tower","London Tower","Royal Clock Tower Mecca","Trade Center New York"],
        answer:  "London Tower"
    },
    {
        question: "assets/images/quizImages/machu-picchu.webp",
        options: ["Machu Picchu Peru","Ankor Wat Cambodia","Bayon Temple-Paris","Cerro Machu Picchu"],
        answer: "Machu Picchu Peru"
    },
    {
        question: "assets/images/quizImages/mount-rushmore.webp",
        options: ["Mount Argus Dublin","Mount Ararat Turkey","Mount Rushmore United States","Mount Arbet Isreal"],
        answer: "Mount Rushmore United States"
    },
    {
        question: "assets/images/quizImages/petra.webp",
        options: ["Ankor ","Acropolis Athens","Petra Jordan","Taj Mahal"],
        answer: "Petra Jordan"
    },
    {
        question: "assets/images/quizImages/pyramid-of-kukulkan",
        options: ["Pyramid of Tiza Mexico","Pyramid of Kukulkan","Pyramid of Giza","Pyramid of Cholula Mexico"],
        answer: "Pyramid of Kukulkan"
    },
    {
        question: "assets/images/quizImages/stonehenge-england.webp",
        options: ["Stone Henge England","Avebury England","Woodhenge England","Stone Henge Nebraska"],
        answer: "Stone Henge England"
    },
    {
        question: "assets/images/quizImages/taj-mahal.webp",
        options: ["Petra Jordan","Shah Jahan Paris","Taj Mahal India","Ankor Wat"],
        answer: "Taj Mahal India"
    },
    {
        question: "assets/images/quizImages/westminster-palace.webp",
        options: ["Kensington Palace London","Central White Hall Palace","Westminster Palace London","Buckingham Palace"],
        answer: "Westminster Palace London"
    },
    
];


let currentQuestion = null;
let questionCounter = 0;


// DOMContent loaded allows the document to be loaded before adding event listeners to all the required areas

document.addEventListener("DOMContentLoaded", function(){
    
    // To access the game instruction, hide the firstpage and show the second one
    let instruct = document.getElementById("instruct");
    instruct.addEventListener("click", function(){
    document.getElementById("firstPage").classList.add("hide"); 
    document.getElementById("howTo").classList.remove("hide");
    })

    // To access the name area, hide the current page and show the next one
    let nameArea = document.getElementById("enterName");
    nameArea.addEventListener("click", function(){
    document.getElementById("firstPage").classList.add("hide"); 
    document.getElementById("nameArea").classList.remove("hide"); 
    })

    // To open up the score page
    let viewScore = document.getElementById("viewScore");
    viewScore.addEventListener("click", viewSavedScore);
    
    // To go back to the firstpage
    let back = document.getElementById("backFromInstruct");
    back.addEventListener("click", function(){
    document.getElementById("firstPage").classList.remove("hide"); 
    document.getElementById("howTo").classList.add("hide"); 
    })

    // To submit name value to access the game
    let submit = document.getElementById("submit");
    submit.addEventListener("click", function(){
    let name = document.getElementById("nameValue").value;
    if (name){
        document.getElementById("nameArea").classList.add("hide");
        let welcomePage = document.getElementById("welcome");
        welcomePage.classList.remove("hide");
        welcome(name);
    } 
    })
    
    // To access the main game area
    let startGame = document.getElementById("gameStart");
    startGame.addEventListener("click", function(){
    let gameStartArea = document.getElementById("game");
    gameStartArea.classList.remove("hide");
    let welcomePage = document.getElementById("welcome");
    welcomePage.classList.add("hide");

    // Check the options buttons with their class name for a click
    // Add the class correct, increase score and add to the progress bar if selected one is correct
    // Add the class wrong, increase wrong if selected one is wrong
    // Disable the button after the first click
    let options = document.getElementsByClassName("option");
    for (let option of options){
        option.addEventListener("click", e => {
            let selectAns = e.target;
        
            if (selectAns.innerText === currentQuestion.answer){
                option.classList.add("correct"); 
                increaseScore();
                progressBar();
        
            } else {
                option.classList.add("wrong");
                increaseWrong();
            } 
        disableClick();
        setTimeout(runGame, 1000);
        })
    }

    // To return back to the start game listen for
    let reStart = document.getElementById("restart");
    reStart.addEventListener("click", startOver);

    // Add event listener to save score
    let save = document.getElementById("save");
    save.addEventListener("click", saveHighScore);

    // call functions to continue running the game
    runGame();
    countdown();
    })
    
    
})


/**
* Capture the username in a welcome greeting
* Takes its value from the input given in the page before
*/
function welcome(name){
    let playerName = document.getElementById("playerName");
    playerName.innerText = name;
}


/**
* Gets a random question
* Sets it on display to the user
*/
function runGame(){
    resetOptions();
    let questionNumber = document.getElementById("questionNum");
    questionNumber.innerText = questionCounter++;
   
    if (questionCounter > 10){
        stopGame();
    } else {
        const questionIndex = Math.floor(Math.random() * 5);
        // Use the question index to access the question from the array
        currentQuestion = questions[questionIndex];
        // Display the question and option using the index method
        let image = document.getElementById("questionImage");
        image.src = currentQuestion.question;
        
        let choice1 = document.getElementById("option1");
        choice1.innerText = currentQuestion.options[0];
        let choice2 = document.getElementById("option2");
        choice2.innerText = currentQuestion.options[1];
        let choice3 = document.getElementById("option3");
        choice3.innerText = currentQuestion.options[2];
        let choice4 = document.getElementById("option4");
        choice4.innerText = currentQuestion.options[3];
        // Remove the current question from the available questions
        questions.splice(questionIndex, 1) ;
    }
    
}

/**
*  Count down to the required time
* At endtime; calls the function to end the game
*/
function countdown(){
    let counter = 60;
    setInterval(()=>{
    let time = document.getElementById("time");
    time.innerText = counter--;
    if(counter === 0){
        time.innerText = "Time Up!!!"
        stopGame();
    }
    }, 1000);
     
}




/**
* Disable further clicks on answer buttons 
*/
function disableClick(){
    let options = document.getElementsByClassName("option");
    
    for (let option of options){
        option.disabled = true;
    }
}


/**
* Get current score from the DOM and increase it by 1
*/
function increaseScore(){
    let score = document.getElementById("points").innerText;
    document.getElementById('points').innerText = ++score;
}


/**
* Get current count from the DOM and increase it by 1
*/
 function increaseWrong(){
    let wrong = document.getElementById("wrong").innerText;
    document.getElementById('wrong').innerText = ++wrong;
}


/**
* Stops the game
* Brings up the endPage section
* Set the score and right answer in the string
*/
function stopGame(){
    setTimeout(function (){
        let restart = document.getElementById("restart");
        restart.focus();
    }, 360)

    document.body.classList.add("overlay");
    let score = document.getElementById("points").innerText;
    let name = document.getElementById("nameValue").value;
    
    let userName = document.getElementById("username");
    userName.innerText = name;
    let rightAns = document.getElementById("rightAns");
    rightAns.innerText = score;
    let totalScore = document.getElementById("totalScore");
    totalScore.innerText = score * 10;
} 

 
/**
* Resets the state of the question box
*/
function resetOptions(){
    let options = document.getElementsByClassName("option");
    for (let option of options){
        option.disabled = false;
        option.classList.remove("correct");
        option.classList.remove("wrong");
    }
}


/**
* Regulate progress bar increase as more right answer are provided
*/
function progressBar(){
    let score = document.getElementById("points").innerText;
    
    let progressBar = document.querySelector(".progress-inner");
    progressBar.style.transform = `scaleX(${score/10})`;
}


/*
* Takes the game back to the beginning for use by another user
*/
function startOver(){
    document.body.classList.remove("overlay");
    questionCounter = 0;
    let score = document.getElementById("points").innerText;
    score.innerText = 0;
    let wrong = document.getElementById("wrong").innerText;
    wrong.innerText = 0;
    window.location.reload();
}


/**
* Opens up the high score page
* Gets the saved score from the local storage
* List the saved scores
*/
function viewSavedScore(){
    document.getElementById("firstPage").classList.add("hide"); 
    document.getElementById("highScore").classList.remove("hide");

    // Gets saved item from the local storage andputs it on the highscore page
    let highScorePage = JSON.parse(localStorage.getItem("scores") || "[]");
    let highContainer = document.getElementById("highScoreContainer");

    highContainer.innerHTML = highScorePage.map(scores => {
    return `
        <li class="high-score"> ${scores.nameX} - ${scores.scoreX}</li>
          `
    }).join('');
}


/**
* Return the page back to the home page
*/
function highBackHome(){
    document.getElementById("firstPage").classList.remove("hide");
    document.getElementById("highScore").classList.add("hide");
}

/**
* Save score
* Resolve player name and score into an object
* Sets and save to the local storage
*/
function saveHighScore(){
    let score = document.getElementById("totalScore");
    let name = document.getElementById("playerName");

    let highScore = {
        scoreX : score.innerText,
        nameX : name.innerText
    }

    let getScore = JSON.parse(localStorage.getItem("scores")) || "[]";
    getScore.push(highScore);
    getScore.sort(function(a, b){return b.scoreX - a.scoreX});
    getScore.splice(5);
    localStorage.setItem("scores", JSON.stringify(getScore));
    // Prevent multiple use of save button on a game
    document.getElementById("save").disabled = true
}
