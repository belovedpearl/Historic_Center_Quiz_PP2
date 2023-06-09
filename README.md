# EXPLORE - *Historic Centers Around the world*

[View code here](https://github.com/belovedpearl/Historic_Center_Quiz_PP2)

![Responsiveness](assets/images/siteRepresentation/screen_responsive.webp)

[View site responsiveness here](https://ui.dev/amiresponsive?url=https://belovedpearl.github.io/Historic_Center_Quiz_PP2/)


---

**Table of Contents:**
---
---
 * [Project Description](#project-description)
    * [Site Owners Goal](#site-owners-goal)
    * [Users Goal](#users-goal)
    * [Target Audience](#target-audience)
   
* [WireFrames](#wireframes)
    * [Initial Wireframes](#initial-wireframes)
       * [Wireframe 1](#wireframe-1-the-landing-page)
       * [Wireframe 2](#wireframe-2-name-input-page)
       * [Wireframe 3](#wireframe-3-start-game-page)

    * [Device Wireframes](#device-wireframe)
       * [Wireframe 4](#wireframe-4-desktop-and-laptop)
       * [Wireframe 5](#wireframe-5-mobile)
* [Features](#features)
    * [Landing Page](#landing-page)
    * [Instruction Page](#instruction-page)
    * [High Score Page](#high-score-page)
    * [Player Name Entry Page](#player-name-entry-page)
    * [Welcome Page](#welcome-page)
    * [Game Page](#game-page)
    * [End Page](#end-page)
    

* [Future features](#future-features)
* [Design Choices](#design-choices)
   * [Font](#font)
   * [Color Schemes](#colour-scheme)

* [Accessibility](#accessibility)

* [Technology, Frameworks and Programs](#technology-frameworks-and-programs)
     * [languages](#languages)
     * [Frameworks and Programs](#frameworks-and-programs)

* [Bugs](#bugs)
     * [Fixed Bugs](#fixed-bugs)
     * [Unfixed Bugs](#unfixed-bugs)

* [Deployment](#deployment)
* [Tools](#tools)
* [Testing](#testing)
     * [Validator Testing](#validator-testing)
         * [HTML](#html)
         * [CSS](#css)
         * [JAVASCRIPT](#javascript)
     * [Lighthouse Performance](#lighthouse-performance)
     * [Functional Testing](#functional-testing)
* [Credit](#credits)
* [Acknowledgement](#acknowledgement)
 















---

 ## Project Description

---

 Historic center quiz features different historic centers around the world, it features about 20 different locations centers around the world and test ability of its users to identify each. It also exposes the mind to all these places of interest. 
 Each question is displayed in form of a picture with 4 options to choose from. To get the right answer, you need to click on the correct option. The quiz diables the buttons to prevent multiple entry and brings up the next question after the first click.

 Get to know more about the world playing this quiz.


---

## Site Owners Goal

---

   * To show forth different historic centers around the world thereby improving users geographical reach.
   * Targets old and young people interested in getting more knowledge about the world around them.
   * To instil knowledge in its users of not so popular historic centers.
   * Take in the player's name to make the experience more personal.
   * Allow users to access the instructions first.
   * Progress bar to keep its user informed about how well they are performing on the test.
   * Points update. 
   * Number of loss record.
   * Overall score obtained by the user.
   * Save the first highscore in the highscore page.
   * No "Reset" button to allow true test shown at the end of the test.


---

## Users Goal

---

   * To easily navigate and understand the game.
   * Be informed about historic centers around.
   * To be able to access the game from different media.


---

## Target Audience

---

The game seeks to impact knowledge and hence its target audience are old and young interested in knowing about the various historic centers around the world. 


---

## Wireframes

---

All wireframes are made with Balsamiq

Link for the wireframe pictures can be found ![here](assets/images/wireframes)

### Initial Wireframes

Initial wireframe representstion of the project concieved outlined below.


#### Wireframe 1: The landing page


![Display-1](assets/images/wireframes/landingPage.webp)


#### Wireframe 2: Name Input Page


![Display-2](assets/images/wireframes/nameInput.webp)


#### Wireframe 3: Start Game Page


![Display-3](assets/images/wireframes/startGamePage.webp)


---

### Device Wireframe

Presention of information on the site will be in the following ways;

##### Wireframe 4: Desktop and Laptop

![Desktop and Laptop](assets/images/wireframes/largeScreenDisplay.webp)


##### Wireframe 5: Mobile

![Tablets and Mobile](assets/images/wireframes/quizMobileView.webp)



---

## Features

---

### Landing Page

The main page is displayed once the websites is open

It is made up of the heading "Historic center quiz" telling the user what the page is about. Right under it are two buttons described below.

 ***Instruction Button*** : This opens up the instruction panel which tells the player more on what to expect in the game.It has a button to return to the main page in order to start the game.

Rules for The Quiz
*  This page opens up once the user clicks on the instruction button.
*  It consist of information about the game every user must know.
*  After reading through the instruction, the user is to press the button "Home" which takes the user back to the main page to continue to the game.

***Play Game Button***: This prompts the users to enter his name which is used in referencing the player at the end of the game. 

***High Score Button***: This button allow users to view previously saved high scores. It keeps a record of 5 high scores that have been recorded. 


![Home Page](assets/images/siteRepresentation/homepage.webp)

---

### Instruction Page

 * This page displays the game instruction to guide the user.
 * It tells the player what to expect and how to go about playing the game.
 * Using the "Home" button, the player can go back to the homepage.

 ![Instruction Page](assets/images/siteRepresentation/instruction.webp)

---

 ### Highscore Page

 * This page shows the highscore saved.
 * It features the record of 5 high score

 ![High Score Page](assets/images/siteRepresentation/highscore.webp)

---

### Player Name Entry Page

   * This page opens up when the user clicks on the **PLAY GAME** button
   * The player **MUST** enter a username to access the quiz.
   * This page takes in the player name to the game.
   * It consist of a **SUBMIT** button which registers the username and opens up the next page.

     

  ![Name Enter Page](assets/images/siteRepresentation/nameinput.webp)

---

**Welcome Page** 

This page welcomes the user  with the **Username** provided and also challenges the user. A click on the startgame option loads the game page.


![Welcome Page](assets/images/siteRepresentation/welcome.webp)

---

**Game Page**

This page displays the quiz body for users to interract with after starting the game, it keeps a record of right question answered, wrong question chosen and it also features a progress bar a visual representation of how well the user is doing with the quiz.

The page consist of the following:
* A section that contains the image of the historic center.
* An option area from which the user can select a choice.
* A progress bar to keep the user informed about correct choice made.
* Score area to update the user on the number of questions answered right.
* A section to keep the user informed about the number of questions answered wrong.
* Count showing the number of questions answered.

Once the page is loaded, the user is expected to make a choice from the list to view the next question.

Each right answer attracts 10 points, the total is presented to the user at the end of the game.

![Games Page](assets/images/siteRepresentation/largescreengame.webp)

---

**Endpage**

   This page opens up after 10 questions have been answered by the user or when the player runs out of the allocated time.
   It presents the player's total score and a detailed summary of questions answered right and questions answered wrong.
   The end message address the user with the provided username putting forward a congratulatory message on the score and number of questions answered right.
   This page consist of a home button which takes the user to the start of the game and resets the game to the start point. 
   
   It also consist of a **Save Score** button which saves the player's score if pressed and can be viewed on the highscore page **if** it meets top 5 scores. Save score is designed to take one click per game to prevent repeating scores saved.


![End Page](assets/images/siteRepresentation/lscreen_end.webp)

---
 
## Future Features

---

 * I will add audio to improve user experience of the game.

 * Add an autosave feature.

 * Features that allow users to choose some custom settings to personalize the game.

 * Randomize the position of each option.

 * Add a reward section where users can choose a gift based on the scores they get.

 * Connect with social media account of users to provide a means to share the game scores online.

---

## Design Choices

---


* For simplicity and my hope to learn more so that users can improve the game appearance to their desired choice, I have opted to use linear gradient to design the body.

* I have added box shadow to the sections to better present it to users.


### Font

* Andika
    * I believe it is a clean font for this game and its bold, its source is google font.
* Sans-serif
    * This is set as a fall-back font for device that might not load google fonts and its easily available.


### Colour Scheme

   
I have selected a mix of blue shades **(rgb(32,201, 255) 36.7%)**, **(rgb(52, 79, 88) 84.4%)**, **black** and **White** to complement site appearance.
Using [color contrast checker](https://dequeuniversity.com/) have checked the contrast of both colors use as foreground and background. Contrast result gave the following.

I have maintained a button text color change to white on hovering to alert the user of the mouse presence on each button.

--- 

## Accessibility

---

Logo opens up to the opening page.

Buttons are used for easy navigation across different section of the application. 


---

## Technology, Frameworks and Programs

---

### Languages

* HTML

* CSS

* JAVASCRIPT

---

### Frameworks and Programs


* Balsamiq
    * Used to create wireframes to plan the project


* Github
    * To store written code


* Gitpod
    * The project was started using Gitpod development environment. From here, I could commit and push all of my changes to Github before switching to the new IDE.

* Code Anywhere
    * This is the new IDE inroduced by the institute, as intructed I switched to this new IDE.

---

## Bugs

---

### Fixed Bugs

* Start Game button submits without inputing a username. 
    * Adding an if statement to check if there is a name in the input fixed this.
* I discover I could use the "Save Score button" multiple times on a game.
    * Disabling the button after executing its function solved this.
* I noticed favicon was not displaying.
    * Properly writing the link by including the absolute path fixed this.


### Unfixed Bugs
 * To my current understanding, there is no unfixed bug

---

## Deployment

---

### GitHub Pages

* The project was deployed via Github Pages.

The following illustrate the steps I took to deplay my website;

  * Go to the repository for [historic center quiz](https://github.com/belovedpearl/Historic_Center_Quiz_PP2).
  * Click on the "Settings" tab, locate the **"Pages"** tab and click it.
  * In the **"Build and Deployment"** section there is a **"Branch Heading"**. Select to deploy from **"main"** branch in the dropdown option.
  * Click on **save**
  * A few minutes later, after refreshing the page, there will automatically be an update containing the **"live site link"**.

The live link can be found [here](https://belovedpearl.github.io/Historic_Center_Quiz_PP2/).

### How to Fork
  
  By forking a repository, you make a copy of a repository without affecting the original repository. You can fork this repository using the following steps.

  * Login to GitHub and locate the [GitHub Repository](https://github.com/belovedpearl/Historic_Center_Quiz_PP2).

  * At the top of the repository just above the **"Settings"** button on the menu, locate the **"Fork"** button.

  * Once **clicked**, you should have a copy of the original repository in your own account.


---

## Tools

---

  *  [Balsamiq Wireframes](https://balsamiq.com/)
  *  [Resizing Images](https://www.reduceimages.com/)
  *  [Reducing Images size](https://tinypng.com/)
  *  [Test for Responsiveness](https://ui.dev/amiresponsive)
  *  [HTML validator](https://validator.w3.org/)
  *  [CSS validation](https://jigsaw.w3.org/)
  *  [Contrast checker](https://dequeuniversity.com/)
  *  [Coolors.co](https://coolors.co/)
  *  [Font Awesome](https://fontawesome.com/)

  *  [Fonts](https://fonts.google.com/) 

  *  [CSS Transition](https:youtu.be/EVze4Cq-dZ8)

  *  [Prettier](https://prettier.io/playground/)

  * [Favicon Generator](https://favicon.io/favicon-generator/)


---

## Testing

---

### Validator Testing

#### HTML
* No errors  were found when passed through the official [W3C Validator check](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbelovedpearl.github.io%2FHistoric_Center_Quiz_PP2%2F)


![HTML Validation](assets/images/siteTest/htmlVal.webp)



#### CSS

 * No errors  were found when passed through the official [W3C Validator check](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbelovedpearl.github.io%2FHistoric_Center_Quiz_PP2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


 ![CSS Validation](assets/images/siteTest/cssVal.webp)

### JAVASCRIPT
 * I have passed the code through [JSHint](https://jshint.com/)


 ![JSHint Checker](assets/images/siteTest/jshint.webp)

 
 

### Lighthouse Performance
* Using chrome lighthouse report, the deatails are presented below.

    * Performance = 99
    * Accessibility = 100 
    * Best Practices = 92
    * SEO = 100

![Lighthouse Report](assets/images/siteTest/lighthouse.webp)


* I have tested the website across different device like samsung S20, ipads and laptop.


### Functional Testing

 Functional testing performed for every action within the website. If the behavior is the same as the expected behavior, it will be marked with P for pass, if not F for fail. 

  
| Action (CLICK) | Expected Behavior   | Actual Behavior |
| :---: | :---: | :---: |
| Logo | Load the homepage  | P   |
| Instruction Button | Links to the instruction section  | P   |
| Home Button | Returns to the homepage from the instruction page   | P   |
| Play Game Button | Opens up the username input page  | P   |
| Start Game Button | Opens up the game page   | P   |
| High Score Button  | Opens up the highScore page  | P |
| Home Button| Returns the user back to the main page  | P   |
| Start Over Button | Restarts the game after 60 seconds timeout or 10 questions answered   | P   |
| Save Score | Saves the score to the local storage   | P   |


---

## Credits


* [ReadMe table presentation](https://github.com/AdamBoley/The-Space-Marine-Legions)

* [ReadMe Table Inspiration](https://github.com/belovedpearl/Green_Space-PP1/blob/main/README.md)

* [Code institute's template](https://github.com/Code-Institute-Org/gitpod-full-template)

* [CSS Transition](https:youtu.be/EVze4Cq-dZ8)

* [Progress Bar Tutorial](https://youtu.be/kjhsS4INZ9o)

* [Learinng more about flex](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/).

*  [W3Schools](https://www.w3schools.com/), [Stack overflow](https://www.slackoverflow.com/) & [Mdn wed docs](https://developer.mozilla.org/en-US/) - Visited several times to learn different syntax used in the code.


* Images: 
Images used are from [Pexels](https://pexels.com)

* Content Sources:

[25 Best Historical Places in the World](https://luxurycolumnist.com/best-historical-places-in-the-world/)

---

## Acknowledgement

* I will like to thank **My Husband** for his support and understanding during the project, for all encouragement and even getting me on this programme.

* Much love to my **Children** for understanding and encouraging me through this project buildup

* A big thank you to my Mentor, **Sandeep Aggarwal**  for the support and through enlightment he provided during the buildup of this project.

* ReadMe layout inspiration from other Code Institute students from #peer-code-review forum and https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md#development

* Thank you to everyone at **Code Institute** for helping us learn.