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



// after the document is loaded, add event listeners to all the required areas

document.addEventListener("DOMContentLoaded", function(){
    let instruct = document.getElementById("instruct");
    instruct.addEventListener("click", function(){
    document.getElementById("firstPage").classList.add("hide"); 
    document.getElementById("howTo").classList.remove("hide");
    })
    let nameArea = document.getElementById("enterName");
    nameArea.addEventListener("click", function(){
        document.getElementById("firstPage").classList.add("hide"); 
        document.getElementById("nameArea").classList.remove("hide"); 
    })
    let back = document.getElementById("backFromInstruct");
    back.addEventListener("click", function(){
        document.getElementById("firstPage").classList.remove("hide"); 
        document.getElementById("howTo").classList.add("hide"); 
    })
    
    let submit = document.getElementById("submit");
    submit.addEventListener("click", function(){
        let name = document.getElementById("nameValue").value;
        document.getElementById("nameArea").classList.add("hide");
         let welcomePage = document.getElementById("welcome");
         welcomePage.classList.remove("hide");
        welcome(name) 
    })

    let startGame = document.getElementById("gameStart");
    startGame.addEventListener("click", function(){
        let gameStartArea = document.getElementById("game");
    gameStartArea.classList.remove("hide");
     let welcomePage = document.getElementById("welcome");
     welcomePage.classList.add("hide");

     runGame()
     countdown()
    })
    
    
})

function welcome(name){
    console.log(name)
    let playerName = document.getElementById("playerName");
    playerName.innerText = name
}