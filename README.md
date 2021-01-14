# gt_fsf_hw4_code_quiz
This is the fourth homework for the gt fsf class with objective being to create a code quiz meeting specified acceptance criteria. I took some creative liberties to make the game more interesting and visually pleasing, but still ensured all grading criteria was met and acceptance criteria was satisfied. Details of the game can be found in the description section below.

## Table of Contents

1.  [Deployed Application](#Deployed-Applicatoin)
2.  [Motivation](#Motivation)
3.  [Description](#Description)
4.  [Credits](#Credits)

## Deployed Application
[https://wryanj.github.io/gt_fsf_hw4_code_quiz/]

## Motivation
I did this to progress my knowledge on javascript, and the various ways to write logic, loops, variables, arrays and manipulate other elements of an HTML file.

## Description
This assignment provided no starter code, so I created my own HTML, JS, and CSS to completed it. For CSS, I used mostly bootstrap 4.5 with a few of my own classes sprinkled on top. For javascript, we used all vanilla js for this assignment by request. 

For displaying different "screens" to the user, I actually just created containers on a single HTML file and would display or show them by adding or removing the d-none bootstrap class within various functions. 

![image](https://user-images.githubusercontent.com/72420733/104608804-54805100-5650-11eb-8f77-750b771a202f.png)

My styling was done in a way that more resembles real life online test and quizzes. I utilized radio buttons and a submit button for the quiz rather than just regular buttons under a question. 

![image](https://user-images.githubusercontent.com/72420733/104333679-87dfa600-54bf-11eb-8ed2-92a137733a78.png)

I added a little bit to the rules of the game to make it more challenging. The rules (seen below) were created so that there is incentive to go fast, but equal incentive to answer with accuracy.

![image](https://user-images.githubusercontent.com/72420733/104333793-a180ed80-54bf-11eb-845b-9d42ea7eff22.png)


For high score storage I used local window storage. I stored one object and would push to this as needed. Before storing an object, I always checked if an object already existed in local storage and thats how I manage to add new scores, but also create a first one if nothing had existed (the game was never played before or a user hit clear high scores)

![image](https://user-images.githubusercontent.com/72420733/104609569-2bac8b80-5651-11eb-8090-5f74bd15133d.png)

I also made sure to add validation through the program where applicable, including making sure buttons are disabled when appropriate, answers are always submitted, and initials are entered correctly when logging high scores. 

In addition, based on the conditions that broke the countdown I had different messaging. If time expired by natural count, you got one message. If you completed before time, you got another. And if you choose incorrect and lost ten seconds as a penalty with not that amount to spare, you were notified as such:

![image](https://user-images.githubusercontent.com/72420733/104334336-34218c80-54c0-11eb-8536-4d94c0310e05.png)

This assignment also helped me understand functional programming better. In my third assignment I made one big function, but with this when I needed lots of them to be re-usable, I had to set it up with lots of global functions and variables so I could always call them again when needed. 

Lastly, I played the game on my actual iphone. I found that despite things working ok in chrome dev tools when I simulated viewport for iphone 8 plus, on a real phone the margins were not big enough and the buttons were too hard to press on the phone. So, I added some left margin to all the input elements for radio buttons to ensure in real life you could easily select answers on a mobile device with touch screen. In real life I might have used media queries for this, but for this I just did it globally in the html file using bootsrap 4.5 default classes for ml.

![image](https://user-images.githubusercontent.com/72420733/104609663-44b53c80-5651-11eb-832a-5d3d07c357c9.png)


## Credits
I utilized some stack, w3 schools, mozilla and class notes to completed this work. The approach I took was all my own logic. 
